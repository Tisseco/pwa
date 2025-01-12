import { AppSidebar } from '@/domains/shared/presenter/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/domains/shared/presenter/components/ui/sidebar'
import { Outlet, useRouteContext } from '@tanstack/react-router'

export function SidebarLayout() {
  const { i18n: { t } } = useRouteContext({ from: '__root__' })
  
  return (
    <SidebarProvider>
      <AppSidebar accessibilitySidebarTitle='Tisseco' accessibilitySidebarDescription={t('common:main.navigation')} />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
  