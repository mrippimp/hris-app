"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
  User,
  User2,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    icon: Settings,
    subMenus: [
      {
        title: "Profile",
        url: "/settings/profile",
        icon: User,
      },
      {
        title: "Account",
        url: "/settings/account",
        icon: User2,
      },
    ],
  },
];

const AppSidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // resolve hydration using resolvedTheme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link href="/">
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? "/HorizonHR_Light.png"
                      : "/HorizonHR_Dark.png"
                  }
                  alt="default logo"
                  width={40}
                  height={40}
                />
                <span className="sr-only">HRIS Logo</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.subMenus ? (
                  <Collapsible key={item.title} className="group/collapsible">
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <CollapsibleTrigger>
                          <item.icon />
                          {item.title}
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <CollapsibleContent>
                      {item.subMenus?.map((subMenu) => (
                        <SidebarMenuSub key={subMenu.title}>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <Link href={subMenu.url}>
                                <subMenu.icon />
                                {subMenu.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="w-7 h-7">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>...</AvatarFallback>
                  </Avatar>
                  John Doe
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
