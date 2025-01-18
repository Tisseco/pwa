import { AddressCombobox } from '@/contexts/map/presenter/components/AddressCombobox'
import { Feature } from '@/contexts/map/presenter/components/AddressCombobox/services/getAddressListAPIDataGouv'
import { createFileRoute, useRouteContext } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/(map)/carte-interactive')({
  component: RouteComponent
})

function RouteComponent() {
  const { i18n: { t } , getNearestContributionPointsByGeoPos } = useRouteContext({ from: '/(map)/carte-interactive' })
  const [address, setAddress] = useState<Feature | null>(null)

  return (
      <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <div className="px-3 pb-2 flex flex-col justify-end row-span-1">
        <h1 className="text-primary font-bold text-lg">
          {t("common:interactive.map")}
        </h1>
      </div>
      <div className="m-3 row-span-9 rounded-md bg-slate-400 animate-pulse flex justify-center items-center">
        Map
      </div>
      <div className="px-3 row-span-2 flex flex-col gap-2 overflow-hidden">
        <AddressCombobox setAddress={setAddress} />
        <p className="text-xs text-muted-foreground font-bold">
          {t('common:select.an.address.to.display.the.nearest.voluntary.drop-off.points')}
        </p>
      </div>
    </div>
  )
}
