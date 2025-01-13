import { HeaderLayout } from '@/contexts/shared/presenter/Layouts/HeaderLayout'
import { createFileRoute, useRouteContext } from '@tanstack/react-router'

export const Route = createFileRoute('/_isAuthenticated/')({
  component: RouteComponent,
})

function RouteComponent() {
    const { i18n: { t } } = useRouteContext({ from: '__root__' })
  return (
    <HeaderLayout
      breadcrumbItemList={[
        { 
          link: '/',
          label: t('glossary:home'),
          hiddenIfMd: true
        }
      ]}
    >
        <div>Home</div>
    </HeaderLayout>)
}
