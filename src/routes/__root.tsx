import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { i18n } from 'i18next'

import { AuthRepository } from '@/contexts/auth/domain/AuthRepository'
import PWABadge from '@/contexts/shared/presenter/components/PWABadge'
import { Toaster } from '@/contexts/shared/presenter/components/ui/toaster'
import { AuthState } from '@/contexts/auth/store/AuthStore'
import { ScheduledTourDetailsRepository } from '@/contexts/TourManagement/domain/ScheduledTourDetailsRepository'
import { MapRepository } from '@/contexts/map/domain/MapRepository'
import { ReportRepository } from '@/contexts/report/domain/ReportRepository'

export const Route = createRootRouteWithContext<{
  i18n: i18n
  queryClient: QueryClient
  loginUseCase: AuthRepository["login"]
  logoutUseCase: AuthRepository["logout"]
  driverFetchHisOwnScheduledTourDetailsUseCase: ScheduledTourDetailsRepository["getAllScheduledTourDetailsByAssignedUser"]
  user?: AuthState["user"]
  getNearestContributionPointsByGeoPos: MapRepository["getNearestContributionPointsByGeoPos"]
  getContributionPointsByAreaId: MapRepository["getContributionPointsByAreaId"]
  postReportForm: ReportRepository['postReportForm']
}>()({
  component: Root
})

function Root() {

  return (
    <>
      <Outlet />
      <Toaster />
      <PWABadge />
    </>
  )
}
