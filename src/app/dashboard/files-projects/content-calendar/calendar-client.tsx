"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Badge as AntBadge,
  Select,
  Button as AntButton,
  ConfigProvider,
  Tooltip,
  Modal,
  theme,
} from "antd";
import type { Dayjs } from "dayjs";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import dayjs from "dayjs";
import {
  ShareAltOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";

type CalendarEvent = {
  id: string;
  title: string;
  date: string; // ISO date string format
  type: "blog" | "social" | "email" | "video";
  status: "draft" | "scheduled" | "published";
};

type EventStatus = "draft" | "scheduled" | "published";

const getEventStatusBadgeType = (status: EventStatus): "default" | "processing" | "success" | "warning" => {
  switch (status) {
    case "draft":
      return "default";
    case "scheduled":
      return "processing";
    case "published":
      return "success";
    default:
      return "default";
  }
};

const getEventTypeColor = (type: string): string => {
  switch (type) {
    case "blog":
      return "#1677ff"; // blue
    case "social":
      return "#52c41a"; // green
    case "email":
      return "#faad14"; // yellow
    case "video":
      return "#f5222d"; // red
    default:
      return "#d9d9d9"; // grey
  }
};

export default function CalendarClient() {
  const [selectedValue, setSelectedValue] = useState<Dayjs>(dayjs());
  const [calendarMode, setCalendarMode] = useState<CalendarMode>("month");
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [unplannedCount] = useState<number>(3);

  // Get calendar data
  useEffect(() => {
    // Mock data - in real app, this would be an API call
    const mockEvents: CalendarEvent[] = [
      {
        id: "1",
        title: "Blog Post: Summer Fashion Tips",
        date: "2025-05-05", // May 5, 2025
        type: "blog",
        status: "published",
      },
      {
        id: "2",
        title: "Instagram Post: New Collection",
        date: "2025-05-12", // May 12, 2025
        type: "social",
        status: "scheduled",
      },
      {
        id: "3",
        title: "Newsletter: June Preview",
        date: "2025-05-20", // May 20, 2025
        type: "email",
        status: "draft",
      },
      {
        id: "4",
        title: "YouTube Tutorial: Styling Guide",
        date: "2025-05-25", // May 25, 2025
        type: "video",
        status: "scheduled",
      },
    ];
    
    setEvents(mockEvents);
  }, []);

  // Filter events for a specific date
  const getEventsForDate = (date: Dayjs) => {
    const dateString = date.format('YYYY-MM-DD');
    return events.filter(event => event.date === dateString);
  };

  // Handle date selection in calendar
  const onSelect = (value: Dayjs) => {
    setSelectedValue(value);
    setSelectedDate(value);
    setModalVisible(true);
  };

  // Handle month/year panel change
  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    setSelectedValue(value);
    setCalendarMode(mode);
  };

  // Handle adding a new event
  const handleAddEvent = () => {
    setSelectedDate(dayjs());
    setModalVisible(true);
  };

  // Create a custom date cell renderer
  const dateCellRender = (value: Dayjs) => {
    const listData = getEventsForDate(value);
    
    if (listData.length === 0) return null;
    
    return (
      <ul className="event-list">
        {listData.map((item) => (
          <li key={item.id}>
            <Tooltip title={item.title}>
              <AntBadge 
                color={getEventTypeColor(item.type)}
                status={getEventStatusBadgeType(item.status as EventStatus)}
                text={<span className="event-text">{item.title}</span>} 
              />
            </Tooltip>
          </li>
        ))}
      </ul>
    );
  };

  // Header controls for the calendar
  const calendarHeader = {
    left: [
      <Button key="add" onClick={handleAddEvent} size="sm" className="mr-2">
        <PlusOutlined className="mr-1 h-4 w-4" /> Add Item
      </Button>,
      <Badge key="unplanned" className="bg-blue-500 hover:bg-blue-600 mr-2">
        {unplannedCount} Unplanned
      </Badge>
    ],
    center: [
      <Select
        key="mode-select"
        defaultValue="month"
        style={{ width: 120 }}
        onChange={(value: CalendarMode) => setCalendarMode(value)}
        options={[
          { value: 'month', label: 'Month' },
          { value: 'year', label: 'Year' },
        ]}
      />
    ],
    right: [
      <Button key="share" variant="outline" size="icon" className="mr-2 h-8 w-8">
        <ShareAltOutlined />
      </Button>,
      <Button key="more" variant="outline" size="icon" className="h-8 w-8">
        <EllipsisOutlined />
      </Button>
    ]
  };
    
  // Modal for adding/editing events
  const eventModal = (
    <Modal
      title="Event Details"
      open={modalVisible}
      onCancel={() => setModalVisible(false)}
      footer={[
        <AntButton key="back" onClick={() => setModalVisible(false)}>
          Cancel
        </AntButton>,
        <AntButton key="submit" type="primary" onClick={() => setModalVisible(false)}>
          Save
        </AntButton>,
      ]}
    >
      <p>Date: {selectedDate.format('YYYY-MM-DD')}</p>
      <p>Add event form would go here</p>
    </Modal>
  );

  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Content Calendar</h2>
        <div className="flex items-center space-x-2">
          {calendarHeader.left}
          {calendarHeader.center}
          {calendarHeader.right}
        </div>
      </div>
      
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          components: {
            Calendar: {
              colorBgContainer: '#ffffff',
              colorBorderSecondary: '#f0f0f0',
            },
          },
        }}
      >
        <Calendar
          value={selectedValue}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          mode={calendarMode}
          dateCellRender={dateCellRender}
          className="content-calendar"
        />
      </ConfigProvider>

      {eventModal}
      
      <style jsx global>{`
        .content-calendar .ant-picker-calendar-date-content {
          height: 80px;
          overflow: hidden;
        }
        .event-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .event-list li {
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .event-text {
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}
