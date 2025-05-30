"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Tag,
  Layers,
  Calendar,
  ClipboardCheck,
  Folder,
  UserPlus,
  Zap,
  HelpCircle,
  SquarePlus,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// This is sample data.
const data = {
  user: {
    name: "Animoc",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Animoc Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Animoc Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Animoc Tech.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    { title: 'Home', url: '/dashboard', icon: SquareTerminal, items: [] },
    { title: 'Brand Kits', url: '/dashboard/brand-kits', icon: Tag, items: [] },
    { title: 'Templates', url: '/dashboard/templates', icon: Layers, items: [] },
    { title: 'Calendar', url: '/dashboard/calendar', icon: Calendar, items: [] },
    { title: 'Analytics', url: '/dashboard/analytics', icon: PieChart, items: [] },
    { title: 'Approvals', url: '/dashboard/approvals', icon: ClipboardCheck, items: [] },
    {
      title: 'Files & Projects',
      url: '/dashboard/files-projects',
      icon: Folder,
      items: [
        { title: 'Recent', url: '/dashboard/files-projects/recent' },
        { title: 'Uploads', url: '/dashboard/files-projects/uploads' },
        { title: 'Content Calendar', url: '/dashboard/files-projects/content-calendar' },
      ],
    },
  ],
}

const bottomNavItems = [
  { title: 'Join a Workshop', url: '/workshop', icon: Calendar },
  { title: 'Invite Team Member', url: '/invite', icon: UserPlus },
  { title: 'Integrations', url: '/integrations', icon: Zap },
  { title: 'Help & Support', url: '/support', icon: HelpCircle },
];

import { useAnnouncement } from "./announcement-context";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { visible, barHeight } = useAnnouncement();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem className="px-2">
            <SidebarMenuButton className="w-full px-2 justify-start">
              <SquarePlus className="mr-2 h-5 w-5" /> Create New
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter style={visible ? { marginBottom: barHeight } : {}}>
        <NavMain items={bottomNavItems} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

