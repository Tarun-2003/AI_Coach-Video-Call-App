"use client";
import { BotIcon,VideoIcon,StarIcon } from "lucide-react";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarContent } from "@/components/ui/sidebar";
import { SidebarFooter } from "@/components/ui/sidebar";
import { SidebarGroup } from "@/components/ui/sidebar";
import { SidebarGroupContent } from "@/components/ui/sidebar";
import { SidebarHeader } from "@/components/ui/sidebar";
import { SidebarMenu } from "@/components/ui/sidebar";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";

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

export const DashboardSidebar=()=>{
    // const pathname = "/agents";
    const pathname = usePathname();
    return(
        <Sidebar >
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                <Image src="/logo.svg" height={36} width={36} alt="coach ai" />
                <p className="text-2xl font-semibold text-sidebar-foreground">
                    Coach AI
                </p>
            </Link>
            </SidebarHeader>

            <div className="px-4 py-2">
                    <Separator className="opacity-10 text-[#5D6B68]"/> 
            </div>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu>
                            {firstSection.map((item)=>(
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton 
                                    asChild
                                    
                                    className={cn(
                                        "h-10 hover:bg-linear-to-r/oklch border border-transparent  hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10"
                                    )}
                                    isActive={pathname === item.href}
                                    >
                                        <Link href ={item.href}>
                                        <item.icon className="size-5"/> 
                                        <span className="text-sm font-medium tracking-tight">
                                            {item.label}
                                        </span>
                                        </Link>
                                    </SidebarMenuButton>

                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
            <div className="px-4 py-2">
                    <Separator className="opacity-10 text-[#5D6B68]"/> 
            </div>
                    <SidebarGroup>
                        <SidebarMenu>
                            {secondSection.map((item)=>(
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton 
                                    asChild
                                    
                                    className={cn(
                                        "h-10 hover:bg-linear-to-r/oklch border border-transparent  hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10"
                                    )}
                                    isActive={pathname === item.href}
                                    >
                                        <Link href ={item.href}>
                                        <item.icon className="size-5"/> 
                                        <span className="text-sm font-medium tracking-tight">
                                            {item.label}
                                        </span>
                                        </Link>
                                    </SidebarMenuButton>

                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>

                </SidebarContent>

        <SidebarFooter className="text-white">
            <DashboardUserButton/>
        </SidebarFooter>
 
        </Sidebar>
    )
}