import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet'
import { Navigation } from 'lucide-react'

import { contributionPoint } from '@/contexts/map/domain/aggregates/contributionPoint'
import { Coordinates } from '@/contexts/map/presenter/components/Map/types'
import { CustomMarker } from '@/contexts/map/presenter/components/Map/components/CustomMarker'
import '@/contexts/map/presenter/components/Map/styles.css'
import { FlyTo } from './components/FlyTo'

export function Map({
  className,
  center,
  contributionPointList,
  ...props
}: {
  className?: string
  center: Coordinates
  contributionPointList?: contributionPoint[]
} & MapContainerProps) {

  return (
    <MapContainer
      className={className}
      center={center}
      zoom={15}
      scrollWheelZoom={false}
      {...props}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CustomMarker color='red' position={center}>
        <div className='p-3 flex flex-col gap-3 bg-slate-50 rounded-md'>
          <p className='text-base font-bold'>Vous êtes ici</p>
        </div>
      </CustomMarker>
      { contributionPointList && (
        <>
          {contributionPointList.map((contributionPoint, i) =>
            <CustomMarker key={`customMarker-${i}`} position={contributionPoint.coordinates}>
              <div className='p-3 flex flex-col gap-3 bg-slate-50 rounded-md'>
                <div className='text-primary space-y-1'>
                  <p className='text-base font-bold'>{contributionPoint.name}</p>
                  <div className='flex justify-between gap-2 items-end'>
                    <div>
                      <p>{contributionPoint.address}</p>
                      <p>{contributionPoint.city} {contributionPoint.zipCode}</p>
                    </div>
                    <a
                      href={`https://www.google.com/maps?q=${contributionPoint.coordinates.lat},${contributionPoint.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className='p-2 rounded-full bg-primary'>
                        <Navigation className='text-primary-foreground' size={16} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </CustomMarker>)}
            <FlyTo position={center} />
          </>
        )}
    </MapContainer>
  )
}