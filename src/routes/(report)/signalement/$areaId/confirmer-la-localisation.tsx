import { useCallback, useEffect, useState } from 'react'
import { createFileRoute, useNavigate, useParams, useRouteContext } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { MapContainer, TileLayer } from 'react-leaflet'

import { Button } from '@/contexts/shared/presenter/components/ui/button'
import { CustomMarker } from '@/contexts/map/presenter/components/Map/components/CustomMarker'
import { Coordinates } from '@/contexts/map/presenter/components/Map/types'

export const Route = createFileRoute(
  '/(report)/signalement/$areaId/confirmer-la-localisation',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { areaId } = useParams({ from: '/(report)/signalement/$areaId/confirmer-la-localisation' })
  const { i18n: { t }, getContributionPointsByAreaId } = useRouteContext({ from: '/(report)/signalement/$areaId/confirmer-la-localisation' })
  const [currentPosition, setCurrentPosition] = useState<Coordinates | null>(null);
  const navigate = useNavigate({ from: '/signalement/$areaId/confirmer-la-localisation' })
  
  const initializeGeolocation = useCallback(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentPosition({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
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

  const { data: contributionPoint, isLoading } = useQuery({
    queryKey: ['getContributionPointsByAreaId', areaId],
    queryFn: () => getContributionPointsByAreaId(parseInt(areaId))
  })

  return (
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <div className="px-3 pb-2 flex flex-col justify-end row-span-1">
        <h1 className="text-primary font-bold text-lg">{t("common:address.confirmation")}</h1>
      </div>
      { isLoading && <div className="m-3 row-span-8 rounded-md animate-pulse bg-slate-50 flex justify-center items-center">
        <p className='text-primary opacity-30'>{t('glossary:loading')}…</p>  
      </div>}
      {contributionPoint && <MapContainer
        className="m-3 row-span-8 rounded-md"
        center={contributionPoint.coordinates}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { currentPosition && <CustomMarker color='red' position={currentPosition}>
          <div className='p-3 flex flex-col gap-3 bg-slate-50 rounded-md'>
            <p className='text-base font-bold'>{t('common:you.are.here')}</p>
          </div>
        </CustomMarker>}
        <CustomMarker position={contributionPoint.coordinates}>
          <div className='p-3 flex flex-col gap-3 bg-slate-50 rounded-md'>
            <div className='text-primary space-y-1'>
              <p className='text-base font-bold'>{contributionPoint.name}</p>
              <div className='flex justify-between gap-2 items-end'>
                <div>
                  <p>{contributionPoint.address}</p>
                  <p>{contributionPoint.city} {contributionPoint.zipCode}</p>
                </div>
              </div>
            </div>
          </div>
        </CustomMarker>
    </MapContainer>}
      <div className='px-3'>
        <p className="text-sm text-muted-foreground font-bold">{t('common:click.on.the.marker.to.display.the.address')}</p>
      </div>
      <div className="px-3 row-span-2 flex flex-col gap-2">
        <Button className="w-full" variant="outline" size="lg">{t('common:report.addressing.error')}</Button>
        <Button
          className="w-full"
          size="lg"
          onClick={() => navigate({to: '/signalement/$areaId/formulaire' })}
        >
          {t('address.confirmation')}
        </Button>
      </div>
    </div>
  )
}
