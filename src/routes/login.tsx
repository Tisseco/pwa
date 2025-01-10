import { LoginPage } from '@/domains/auth/presenter/pages/LoginPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})
