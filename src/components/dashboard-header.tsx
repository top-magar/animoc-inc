"use client";

import * as React from "react";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { cn } from "@/lib/utils";
import { useAnnouncement } from "./announcement-context";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { ThemeToggle } from "./theme-toggle";
import { Search, Plus, Bell, Gift } from "lucide-react";

export function DashboardHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { visible } = useAnnouncement();

  return (
    <header
      className={cn(
        "flex items-center justify-between gap-4 px-4 py-2 bg-background/80  sticky top-0 z-30",
        visible && "backdrop-blur-sm bg-black/10",
        className
      )}
      {...props}
    >
      <SidebarTrigger className="ml-1" />
      {/* Left Zone: Search Files Button */}
      {/*<div className="flex items-center gap-2 min-w-[150px]">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Search className="h-5 w-5" />
        </Button>
        <span className="font-medium text-sm hidden sm:inline">Search Files</span>
      </div>*/}

      {/* Center Zone: Global Create/Search Bar */}
      {/*<div className="flex-1 flex justify-center px-8 ">
        <div className="relative w-full max-w-xl ">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Plus className="h-5 w-5" />
          </span>
          <Input
            className="pl-14 pr-10 py-2 rounded-full bg-muted/50 border border-border text-base shadow-none focus-visible:ring-2 focus-visible:ring-blue-200"
            placeholder="What would you like to create?"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>*/}

      {/* Right Zone: Actions, Theme, Profile */}
      <div className="flex items-center gap-2 min-w-[220px] justify-end">
        <Button variant="outline" className="rounded-full font-semibold px-4 gap-2">
          <Gift className="h-4 w-4" />
          Refer & Earn
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
        </Button>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarImage src="/avatars/user.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

