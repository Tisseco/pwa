/* eslint-disable react-hooks/rules-of-hooks */
import { createFileRoute, useRouteContext, useRouter } from '@tanstack/react-router'
import { queryOptions, useQueryErrorResetBoundary, useSuspenseQuery } from '@tanstack/react-query'
import { HeaderLayout } from '@/contexts/shared/presenter/Layouts/HeaderLayout'
import { Token } from '@/contexts/auth/domain/types/authSharedTypes'
import { ScheduledTourDetailsRepository } from '@/contexts/TourManagement/domain/ScheduledTourDetailsRepository'
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
} from "@/contexts/shared/presenter/components/ui/alert-dialog"

const createScheduledTourDetailsQueryOptions = (token: Token['token'], driverFetchHisOwnScheduledTourDetailsUseCase: ScheduledTourDetailsRepository['getAllScheduledTourDetailsByAssignedUser']) => queryOptions({
  queryKey: ['scheduledTours'],
  queryFn: () => driverFetchHisOwnScheduledTourDetailsUseCase(token)
})

export const Route = createFileRoute('/_isAuthenticated/scheduled-tours')({
  loader: async ({ context: { queryClient, user, driverFetchHisOwnScheduledTourDetailsUseCase } }) => 
    // @ts-expect-error: temporary ts exception
    queryClient.ensureQueryData(createScheduledTourDetailsQueryOptions(user.token, driverFetchHisOwnScheduledTourDetailsUseCase)),
  component: RouteComponent,
  errorComponent: ({ error }) => {
    const { i18n: { t } } = useRouteContext({ from: '__root__' })
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
            <AlertDialogTitle>{t('common:something.went.wrong')}</AlertDialogTitle>
            <AlertDialogDescription>
              {error.message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('glossary:cancel')}</AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              // Invalidate the route to reload the loader, and reset any router error boundaries
              router.invalidate()
            }}>
              {t('common:refresh.app')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
})

function RouteComponent() {
  const { i18n: { t }, user, driverFetchHisOwnScheduledTourDetailsUseCase } = useRouteContext({ from:'__root__' })

  // @ts-expect-error: temporary ts exception
  const { data: scheduledTourDetailsList} = useSuspenseQuery(createScheduledTourDetailsQueryOptions(user.token, driverFetchHisOwnScheduledTourDetailsUseCase))

  if ("errors" in scheduledTourDetailsList) {
    throw new Error(scheduledTourDetailsList.errors?.[0]?.message)
  }

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
      <></>
    </HeaderLayout>
  )
}
