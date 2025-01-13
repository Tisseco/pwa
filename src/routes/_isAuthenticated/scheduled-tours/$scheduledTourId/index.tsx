import { createFileRoute, useParams, useRouteContext } from '@tanstack/react-router'
import { TourStepsCatalog } from '@/contexts/TourManagement/presenter/components/ScheduledTourDetails'
import { scheduledTourDetailsMap } from '@/contexts/TourManagement/presenter/mappers/scheduledTourDetailsMap'
import { useScheduledTourDetailsStore } from '@/contexts/TourManagement/store/scheduledTourDetailsStore'
import { HeaderLayout } from '@/contexts/shared/presenter/Layouts/HeaderLayout'

export const Route = createFileRoute(
  '/_isAuthenticated/scheduled-tours/$scheduledTourId/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { i18n: { t } } = useRouteContext({ from: '__root__' })
  const { scheduledTourId } = useParams({ from: '/_isAuthenticated/scheduled-tours/$scheduledTourId/' })

  const scheduledTourDetailsList = useScheduledTourDetailsStore(({ scheduledTourDetailsList }) => scheduledTourDetailsList)
  const scheduledTourDetails = scheduledTourDetailsList?.find(scheduledTourDetails => scheduledTourDetails.id === parseInt(scheduledTourId))
  
  if(!scheduledTourDetails) throw new Error(t('common:something.went.wrong'))
  
  const scheduledTourDetailsMapped = scheduledTourDetailsMap(scheduledTourDetails)
  
  return (
    <HeaderLayout
      breadcrumbItemList={[
        {
          link: '/',
          label: t('glossary:home'),
          hiddenIfMd: true,
        },
        {
          link: '/scheduled-tours',
          label: t('common:scheduled.tours'),
          hiddenIfMd: false,
        },
        {
          label: scheduledTourId,
          hiddenIfMd: false,
        },
      ]}
    >
      <TourStepsCatalog scheduledTourDetails={scheduledTourDetailsMapped}/>
    </HeaderLayout>
  )
}
