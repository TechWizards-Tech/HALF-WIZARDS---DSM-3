import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
  import { MapIcon, Monitor, Search, Settings, TableOfContents } from "lucide-react"
  import { Separator } from "@radix-ui/react-separator"
  
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Monitor,
    },
    {
      title: "Estações",
      url: "#",
      icon: MapIcon,
    },
    {
      title: "Dados Históricos",
      url: "#",
      icon: TableOfContents,
    },
    {
      title: "Pesquisa",
      url: "#",
      icon: Search,
    },
    {
      title: "Opções",
      url: "#",
      icon: Settings,
    },
  ]
  
  
  export function Appsidebar() {
    return (
      <Sidebar>
        {/* <SidebarHeader className="font-bold text-2xl">TechWinds </SidebarHeader> */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
  
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                         
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                      
                    </SidebarMenuButton>
                    <Separator />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  