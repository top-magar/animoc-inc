"use client";

import React, { useState, useEffect } from 'react';
import { useAnnouncement } from './announcement-context';
import { cn } from "@/lib/utils";

interface AnnouncementBarProps {
  // Define any props needed here if the content or visibility logic were to be controlled externally
}

import { useRef, useLayoutEffect } from "react";

const AnnouncementBar: React.FC<AnnouncementBarProps> = () => {
  const [isAnnouncementVisible, setAnnouncementVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setVisible, setBarHeight } = useAnnouncement();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setVisible(isAnnouncementVisible);
    return () => setVisible(false);
  }, [isAnnouncementVisible, setVisible]);

  useLayoutEffect(() => {
    if (barRef.current && isAnnouncementVisible) {
      setBarHeight(barRef.current.offsetHeight);
    } else {
      setBarHeight(0);
    }
  }, [isAnnouncementVisible, setBarHeight]);

  if (!isAnnouncementVisible) {
    return null;
  }

  return (
    <div ref={barRef} 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium shadow-lg transition-transform duration-300",
        isLoaded ? "translate-y-0" : "-translate-y-full"
      )}
      style={{ 
        height: 'var(--announcement-bar-height, 32px)',
        '--announcement-bar-height': '32px'
      } as React.CSSProperties}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex-1 text-center">
          <span className="inline-flex items-center gap-2">
            <span className="animate-pulse">🔥</span>
            <span className="hidden sm:inline">Expires in 5 days! GET <span className="line-through">25%</span> 33% OFF Annual Pro Plan Trial-Stage Discount!</span>
            <span className="sm:hidden">33% OFF Annual Pro Plan!</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 