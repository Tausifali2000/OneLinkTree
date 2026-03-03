"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  IoGameController,
  IoGameControllerOutline,
  IoTv,
  IoTvOutline,
} from "react-icons/io5";
import {
  HiOutlineWrenchScrewdriver,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import { SiCrunchyroll } from "react-icons/si";

const categories = [
  {
    id: "gaming",
    title: "Gaming",
    url: "/gaming",
    icon: IoGameControllerOutline,
    activeIcon: IoGameController,
  },
  {
    id: "entertainment",
    title: "Entertainment",
    url: "/entertainment",
    icon: IoTvOutline,
    activeIcon: IoTv,
  },
  {
    id: "utilities",
    title: "Utilities",
    url: "/utilities",
    icon: HiOutlineWrenchScrewdriver,
    activeIcon: HiWrenchScrewdriver,
  },
  {
    id: "anime",
    title: "Anime",
    url: "/anime",
    icon: SiCrunchyroll,
    activeIcon: SiCrunchyroll,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="none"
      className="flex-none w-56 min-h-screen border-r border-gray-100 bg-white shadow-sm"
    >
      {/* Header */}
      <SidebarHeader className="p-0 py-4 px-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
            <span className="text-white text-xs font-bold">OL</span>
          </div>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
            OneLinkTree
          </span>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="p-0">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 justify-start px-4 py-3">
            Categories
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5 px-2">
              {categories.map((item) => {
                const isActive = pathname === item.url;
                const Icon = isActive ? item.activeIcon : item.icon;

                return (
                  <SidebarMenuItem key={item.id} className="w-full">
                    <Link
                      href={item.url}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
                        transition-all duration-150 group
                        ${
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                        }
                      `}
                    >
                      <Icon
                        className={`text-base flex-shrink-0 transition-transform duration-150 group-hover:scale-110 ${
                          isActive ? "text-white" : "text-gray-400 group-hover:text-gray-700"
                        }`}
                      />
                      <span className="truncate">{item.title}</span>

                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white opacity-70" />
                      )}
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-0 py-4 px-4 border-t border-gray-100">
        <p className="text-[10px] text-gray-400">
          © {new Date().getFullYear()} OneLinkTree
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}