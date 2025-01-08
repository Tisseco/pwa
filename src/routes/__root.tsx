import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import PWABadge from '../domains/shared/presenter/components/PWABadge'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <PWABadge />
    </>
  ),
})