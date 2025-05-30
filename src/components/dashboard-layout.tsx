"use client";

import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AnnouncementProvider, useAnnouncement } from "@/components/announcement-context";
import AnnouncementBar from "@/components/announcement-bar";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayoutInner({ children }: DashboardLayoutProps) {
  const { visible, barHeight } = useAnnouncement();
  return (
    <>
      <AnnouncementBar />
      <div style={{ marginTop: visible ? barHeight : 0 }}>
        <SidebarProvider>
          <AppSidebar style={{ marginTop: visible ? barHeight : 0 }} />
          <SidebarInset>
            <DashboardHeader />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  );
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AnnouncementProvider>
      <DashboardLayoutInner>{children}</DashboardLayoutInner>
    </AnnouncementProvider>
  );
}

