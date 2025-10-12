// "use client";
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import { DashboardSidebar } from '@/modules/dashboard/ui/components/dashboard-sidebar';
interface Props{
    children:React.ReactNode;
}
const Layout = ({children}:Props) => {
  return (
    <SidebarProvider>
        <DashboardSidebar/>
        <main className='flex flex-col h-screen w-screen bg-muted'>
                {children}
        </main>
    </SidebarProvider>
  )
}

export default Layout

// "use client";

// import React from "react";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

// interface Props {
//   children: React.ReactNode;
// }

// export default function Layout({ children }: Props) {
//   return (
//     <SidebarProvider>
//       <div className="flex h-screen w-screen bg-muted">
//         <DashboardSidebar />
//         <main className="flex-1 overflow-y-auto">
//           {children}
//         </main>
//       </div>
//     </SidebarProvider>

//   );
// }


