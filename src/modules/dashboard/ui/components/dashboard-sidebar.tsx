"use client";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarContent } from "@/components/ui/sidebar";
import { SidebarFooter } from "@/components/ui/sidebar";
import { SidebarGroup } from "@/components/ui/sidebar";
import { SidebarGroupContent } from "@/components/ui/sidebar";
import { SidebarHeader } from "@/components/ui/sidebar";
import { SidebarMenu } from "@/components/ui/sidebar";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { SidebarMenuItem } from "@/components/ui/sidebar";
import { BotIcon,VideoIcon,StarIcon } from "lucide-react";
const firstSection =[
    {
        icon: VideoIcon,
        label:"Meetings",
        href:"/meetings",
    },
    {icon:BotIcon,
        label:"Agents",
        href:"/agents"
    }
];


const secondSection =[
    {
        icon: StarIcon,
        label:"Upgrade",
        href:"/upgrade",
    },
  
];