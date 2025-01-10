import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_isAuthenticated/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Home</div>
}
