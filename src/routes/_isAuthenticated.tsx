import { createFileRoute, redirect } from '@tanstack/react-router'
import { SidebarLayout } from '@/contexts/shared/presenter/Layouts/SidebarLayout'

export const Route = createFileRoute('/_isAuthenticated')({
  beforeLoad: ({context: { user }}) => {
    if (!user?.token) {
      throw redirect({to: '/login'})
    }
  },
  component: SidebarLayout,
})
