"use client";
import React, { createContext, useContext, useState } from "react";

type AnnouncementContextType = {
  visible: boolean;
  setVisible: (v: boolean) => void;
  barHeight: number;
  setBarHeight: (h: number) => void;
};

const AnnouncementContext = createContext<AnnouncementContextType | undefined>(undefined);

export function AnnouncementProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  return (
    <AnnouncementContext.Provider value={{ visible, setVisible, barHeight, setBarHeight }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

export function useAnnouncement() {
  const ctx = useContext(AnnouncementContext);
  if (!ctx) throw new Error("useAnnouncement must be used within AnnouncementProvider");
  return ctx;
}
