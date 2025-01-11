import { createFileRoute, useRouteContext } from '@tanstack/react-router'
import { HeaderLayout } from '@/contexts/shared/presenter/Layouts/HeaderLayout'

export const Route = createFileRoute('/_isAuthenticated/scheduled-tours')({
  component: RouteComponent,
})

function RouteComponent() {
  const { i18n: { t } } = useRouteContext({ from:'__root__' })
  
  return (
    <HeaderLayout 
      breadcrumbItemList={[
        { 
          link: '/',
          label: t('glossary:home'),
          hiddenIfMd: true
        },
        {
          label: t('common:scheduled.tours'),
          hiddenIfMd: false,
        },
      ]}
    >
      <div>Scheduled tours</div>
    </HeaderLayout>
  )
}
