import { createFileRoute, useRouteContext } from '@tanstack/react-router'
import { HeaderLayout } from '@/domains/shared/presenter/Layouts/HeaderLayout'

export const Route = createFileRoute('/_isAuthenticated/scheduled-tours')({
  component: RouteComponent,
})

function RouteComponent() {
  const { i18n: { t } } = useRouteContext({ from:'__root__' })
  const breadcrumbItemList=[
    { link: '/', label: 'Home', hiddenIfMd: true },
    {
      label: t('common:scheduled.tours'),
      hiddenIfMd: false,
    },
  ]
  
  return (
    <HeaderLayout breadcrumbItemList={breadcrumbItemList}>
      <div>scheduler-tour</div>
    </HeaderLayout>
  )
}
