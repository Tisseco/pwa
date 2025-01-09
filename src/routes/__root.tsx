import { createRootRouteWithContext, Link, Outlet, useRouteContext } from '@tanstack/react-router'
import PWABadge from '../domains/shared/presenter/components/PWABadge'

import { i18n } from 'i18next'
import { QueryClient } from '@tanstack/react-query'

export const Route = createRootRouteWithContext<{
    i18n: i18n
    queryClient: QueryClient
}>()({
  component: Root
})

function Root() {
    const { i18n: { t } } = useRouteContext({ from: '__root__' })

    return (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    {t('home', { ns: 'glossary'})}
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    {t('about', { ns: 'glossary' })}
                </Link>
            </div>
            <hr />
            <Outlet />
            <PWABadge />
        </>
    )
}
