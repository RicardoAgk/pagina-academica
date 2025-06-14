// src/hooks/useIsDesktopWithSidebar.ts
import { useState, useEffect } from "react";

export function useIsDesktopWithSidebar(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const desktop = window.innerWidth >= breakpoint;
      setIsDesktop(desktop);
      setIsSidebarOpen(desktop); // Sidebar aberta se for desktop
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, [breakpoint]);

  return { isDesktop, isSidebarOpen, setIsSidebarOpen };
}
