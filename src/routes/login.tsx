import { createFileRoute, redirect } from '@tanstack/react-router'
import { LoginPage } from '@/contexts/auth/presenter/pages/LoginPage'

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context: { user }}) => {
    if (user?.token) {
      throw redirect({to: '/'})
    }
  },
  component: LoginPage,
})
