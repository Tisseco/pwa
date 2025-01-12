import { createFileRoute, useLoaderData, useRouteContext } from '@tanstack/react-router'
import { queryOptions } from '@tanstack/react-query'
import { HeaderLayout } from '@/contexts/shared/presenter/Layouts/HeaderLayout'

export const Route = createFileRoute('/_isAuthenticated/scheduled-tours')({
  loader: ({ context: { queryClient, user, driverFetchHisOwnScheduledTourDetailsUseCase }}) => {
    // TODO: Find an alternative solution to this workaround.
    // Verifying the existence of the user token is unnecessary here because a route guard
    // is already implemented in the `beforeLoad` of my `_isAuthenticated` outlet.
    if (user?.token) {
      return queryClient.ensureQueryData(queryOptions({
        queryKey: ['scheduledTours'],
          queryFn: () => driverFetchHisOwnScheduledTourDetailsUseCase(user.token),
          refetchOnWindowFocus: true,
      }))
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { i18n: { t } } = useRouteContext({ from:'__root__' })
  const scheduledTourDetailsList = useLoaderData({ from: '/_isAuthenticated/scheduled-tours' })
  console.log("🚀 ~ RouteComponent ~ scheduledTourDetailsList:", scheduledTourDetailsList)
  
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
