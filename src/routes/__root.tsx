import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { i18n } from 'i18next'

import { AuthRepository } from '@/domains/auth/domain/AuthRepository'
import PWABadge from '@/domains/shared/presenter/components/PWABadge'
import { Toaster } from '@/domains/shared/presenter/components/ui/toaster'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRouteWithContext<{
  i18n: i18n
  queryClient: QueryClient
  loginUseCase: AuthRepository["login"]
}>()({
  component: Root
})

function Root() {

  return (
    <>
      <Outlet />
      <Toaster />
      <PWABadge />
      {/* <TanStackRouterDevtools /> */}
    </>
  )
}
