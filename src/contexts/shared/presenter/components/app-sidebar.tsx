import * as React from "react"
import {
  Puzzle,
  Truck,
} from "lucide-react"

import { NavMain } from "@/contexts/shared/presenter/components/nav-main"
import { NavUser } from "@/contexts/shared/presenter/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/contexts/shared/presenter/components/ui/sidebar"
import { Link, useRouteContext } from "@tanstack/react-router"
import { useAuthStore } from "@/contexts/auth/store/AuthStore"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuthStore()
  const { i18n: { t } } = useRouteContext({ from:"__root__" })

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Puzzle className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Tisseco</span>
                  <span className="">v0.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain 
          items={[{
            title: t("glossary:driver"),
            url: "#",
            icon: Truck,
            isActive: true,
            items: [
              {
                title: t("common:scheduled.tours"),
                url: "/scheduled-tours",
              }
            ]
          }]}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{name: user?.name || t("common:guest")}} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
