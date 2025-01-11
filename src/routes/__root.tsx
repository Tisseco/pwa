import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { i18n } from 'i18next'

import { AuthRepository } from '@/contexts/auth/domain/AuthRepository'
import PWABadge from '@/contexts/shared/presenter/components/PWABadge'
import { Toaster } from '@/contexts/shared/presenter/components/ui/toaster'
import { AuthState } from '@/contexts/auth/store/AuthStore'

export const Route = createRootRouteWithContext<{
  i18n: i18n
  queryClient: QueryClient
  loginUseCase: AuthRepository["login"]
  logoutUseCase: AuthRepository["logout"]
  user?: AuthState["user"]
}>()({
  component: Root
})

function Root() {

  return (
    <>
      <Outlet />
      <Toaster />
      <PWABadge />
    </>
  )
}
