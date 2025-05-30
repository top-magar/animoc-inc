"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { List, ChevronDown, Plus, CalendarDays } from "lucide-react";
import CalendarGrid from "./CalendarGrid";

export default function ClientCalendarPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button size="lg" variant="secondary" className="flex gap-2 items-center">
            <Plus className="h-5 w-5" />
            New Post
          </Button>
        </div>
      </div>

      {/* Filters and View Switch */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {/* Accounts Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2 items-center">
                Accounts <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>All Accounts</DropdownMenuItem>
              <DropdownMenuItem>Facebook</DropdownMenuItem>
              <DropdownMenuItem>Twitter</DropdownMenuItem>
              <DropdownMenuItem>Instagram</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2 items-center">
                Status <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>All Statuses</DropdownMenuItem>
              <DropdownMenuItem>Scheduled</DropdownMenuItem>
              <DropdownMenuItem>Draft</DropdownMenuItem>
              <DropdownMenuItem>Published</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Projects Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2 items-center">
                Projects <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>All Projects</DropdownMenuItem>
              <DropdownMenuItem>Project A</DropdownMenuItem>
              <DropdownMenuItem>Project B</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* View Switch */}
        <div className="flex gap-2 items-center">
          <Button variant="secondary" size="icon" aria-label="Calendar view" className="data-[state=active]:bg-primary/90">
            <CalendarDays className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="List view">
            <List className="h-5 w-5" />
          </Button>
          {/* Month/Week Select */}
          <Select defaultValue="month">
            <SelectTrigger className="w-[110px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="week">Week</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="rounded-xl border bg-white shadow-sm p-4">
        <CalendarGrid />
      </div>
    </div>
  );
}
