import { useCallback, useEffect, useState } from 'react'
import { createFileRoute, useRouteContext } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Locate } from 'lucide-react'

import { Feature } from '@/contexts/map/presenter/components/AddressCombobox/services/getAddressListAPIDataGouv'
import { AddressCombobox } from '@/contexts/map/presenter/components/AddressCombobox'
import { Map } from '@/contexts/map/presenter/components/Map'
import { Button } from '@/contexts/shared/presenter/components/ui/button'

export const Route = createFileRoute('/(map)/carte-interactive')({
  component: RouteComponent
})

function RouteComponent() {
  const { i18n: { t } , getNearestContributionPointsByGeoPos } = useRouteContext({ from: '/(map)/carte-interactive' })
  const [address, setAddress] = useState<Feature | null>(null)
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(
    null,
  )
  const [useCurrentPosition, setUseCurrentPosition] = useState(false);
  const [resetAddressCombobox, setResetAddressCombobox] = useState(false);

  // Utility to check geolocation and set the position
  const initializeGeolocation = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setUseCurrentPosition(true)
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  }, []);
  
  useEffect(() => {
    initializeGeolocation()
  }, [initializeGeolocation])

  const addressCoordinates = address?.geometry?.coordinates ? {
    lat: address.geometry.coordinates[1],
    lng: address.geometry.coordinates[0]
  } : null

  const targetCoordinates = useCurrentPosition
    ? currentPosition : addressCoordinates

    const { data: contributionPointList } = useQuery({
      queryKey: ['getNearestContributionPointsByGeoPos'],
      queryFn: () =>
        targetCoordinates
          ? getNearestContributionPointsByGeoPos(targetCoordinates)
          : Promise.resolve([]),
    enabled: !!targetCoordinates
  })

  const mapCenter = targetCoordinates || { lat: 48.78117139436384, lng: 2.6595514142043477 }

  return (
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <div className="px-3 pb-2 flex flex-col justify-end row-span-1">
        <h1 className="text-primary font-bold text-lg">{t("common:interactive.map")}</h1>
      </div>
      <Map
        className="m-3 row-span-8 rounded-md"
        center={mapCenter}
        contributionPointList={contributionPointList}
      />
      <div className="px-3 row-span-3 flex flex-col gap-2 overflow-hidden">
        <Button onClick={() => {
          initializeGeolocation()
          setResetAddressCombobox(prev => !prev)
          }}
        >
          {t('common:your.location')}<Locate/>
        </Button>
        <AddressCombobox resetAddressCombobox={resetAddressCombobox} setAddress={(address) => {
          setAddress(address)
          setUseCurrentPosition(false)  
        }} />
        <p className="text-xs text-muted-foreground font-bold">{t('common:select.an.address.to.display.the.nearest.voluntary.drop-off.points')}</p>
      </div>
    </div>
  )
}
