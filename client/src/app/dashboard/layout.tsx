import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import  Sidenav from "@/components/globals/Sidenav"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidenav />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}