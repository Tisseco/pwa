import { createFileRoute } from '@tanstack/react-router'
import { SidebarLayout } from '@/domains/shared/presenter/Layouts/SidebarLayout'

export const Route = createFileRoute('/_isAuthenticated')({
  component: SidebarLayout,
})
