/* eslint-disable react-hooks/rules-of-hooks */
import {
  createFileRoute,
  useLoaderData,
  useRouteContext,
  useRouter,
} from '@tanstack/react-router'
import {
  queryOptions,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query'
import { HeaderLayout } from '@/contexts/shared/presenter/Layouts/HeaderLayout'
import { useEffect } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/contexts/shared/presenter/components/ui/alert-dialog'
import { ScheduledTourCatalog } from '@/contexts/TourManagement/presenter/components/ScheduledTourCatalog'
import { scheduledTourCatalogMap } from '@/contexts/TourManagement/presenter/mappers/scheduledTourCatalogMap'
import { useScheduledTourDetailsStore } from '@/contexts/TourManagement/store/scheduledTourDetailsStore'

export const Route = createFileRoute('/_isAuthenticated/scheduled-tours/')({
  loader: async ({
    context: {
      queryClient,
      user,
      driverFetchHisOwnScheduledTourDetailsUseCase,
    },
  }) =>
    queryClient.ensureQueryData(
      queryOptions({
        queryKey: ['scheduledTours'],
        // @ts-expect-error: user is guaranteed to be non-null; otherwise, they would be redirected to the login page.
        queryFn: () => driverFetchHisOwnScheduledTourDetailsUseCase(user.token),
      })
    ),
  component: RouteComponent,
  errorComponent: ({ error }) => {
    const {
      i18n: { t },
    } = useRouteContext({ from: '__root__' })
    const router = useRouter()
    const queryErrorResetBoundary = useQueryErrorResetBoundary()

    useEffect(() => {
      // Reset the query error boundary
      queryErrorResetBoundary.reset()
    }, [queryErrorResetBoundary])

    return (
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {t('common:something.went.wrong')}
            </AlertDialogTitle>
            <AlertDialogDescription>{error.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('glossary:cancel')}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                // Invalidate the route to reload the loader, and reset any router error boundaries
                router.invalidate()
              }}
            >
              {t('common:refresh.app')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
})

function RouteComponent() {
  const {
    i18n: { t },
  } = useRouteContext({ from: '__root__' })
  const storeScheduledTourDetailsList = useScheduledTourDetailsStore(({ storeScheduledTourDetailsList }) => storeScheduledTourDetailsList)

  const data = useLoaderData({ from: '/_isAuthenticated/scheduled-tours/' })

  if ('errors' in data) {
    throw new Error(data.errors?.[0]?.message)
  }

  storeScheduledTourDetailsList(data)

  return (
    <HeaderLayout
      breadcrumbItemList={[
        {
          link: '/',
          label: t('glossary:home'),
          hiddenIfMd: true,
        },
        {
          label: t('common:scheduled.tours'),
          hiddenIfMd: false,
        },
      ]}
    >
      <ScheduledTourCatalog scheduledTourDetailsList={scheduledTourCatalogMap(data)} />
    </HeaderLayout>
  )
}
