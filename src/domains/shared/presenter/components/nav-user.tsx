"use client"

import { useRouteContext } from "@tanstack/react-router"
import { useAuth } from "@/domains/auth/presenter/hooks/useAuth"

import {
  ChevronsUpDown,
  LogOut,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/domains/shared/presenter/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/domains/shared/presenter/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
  }
}) {
  const { isMobile } = useSidebar()
  const { i18n: { t } } = useRouteContext({ from: "__root__" })
  const logout = useAuth()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="grid flex-1 text-left text-sm leading-tight">
                <>
                  <span className="truncate text-xs">{t("common:logged.as")}</span>
                  <span className="truncate font-semibold">{user.name}</span>
                </>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem onClick={() => logout()}>
              <LogOut />
              {t("common:log.out")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
