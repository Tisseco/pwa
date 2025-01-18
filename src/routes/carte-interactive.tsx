import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Navigation } from 'lucide-react'

import { AddressCombobox } from '@/contexts/shared/presenter/components/AddressCombobox'

export const Route = createFileRoute('/carte-interactive')({
  component: RouteComponent,
})

function LocationMarker({ position, containerList }) {
  const map = useMap()
  map.flyTo(position)

  return (
    containerList &&
    containerList.map((container, i) => (
      <Marker key={`marker-${i}`} position={container.coordinates}>
        <Popup>
            <div className='p-3 flex flex-col gap-3 bg-slate-50 rounded-md'>
              <div className='text-primary space-y-1'>
                <p className='text-base font-bold'>{container.name}</p>
                <div className='flex justify-between gap-2 items-end'>
                  <div>
                    <p>{container.address}</p>
                    <p>{container.city} {container.zipCode}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${container.coordinates.lat},${container.coordinates.lng}`}
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
        </Popup>
      </Marker>
    ))
  )
}

const getNearestContainer = ({ lat, lng } : { lat: number; lng: number }) => [
  {
    name: 'École maternelle Pommier-Picard',
    address: 'Avenue Eugène Delacroix',
    city: 'Roissy-en-Brie',
    zipCode: '77680',
    coordinates: {
      lat: 48.79486594306784,
      lng: 2.66332583500162,
    },
  },
  {
    name: 'Maire de Roissy',
    address: '9 Rue Pasteur',
    city: 'Roissy-en-Brie',
    zipCode: '77680',
    coordinates: {
      lat: 48.79089017580114,
      lng: 2.6545373947958124,
    },
  },
  {
    name: 'Supermarché Diagonal',
    address: '21 Avenue du Maréchal Foch',
    city: 'Roissy-en-Brie',
    zipCode: '77680',
    coordinates: {
      lat: 48.79113799735448,
      lng: 2.66868861297407,
    },
  },
]

function RouteComponent() {
  const [address, setAddress] = useState(null)
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(
    null,
  )

  useEffect(() => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        })
      }
    }, [])

  const addressCoordinates = {
    lat: address?.geometry?.coordinates?.[0],
    lng: address?.geometry?.coordinates?.[1]
  }

  const { data: containerList } = useQuery({
    queryKey: ['containerNearTo'],
    queryFn: () => getNearestContainer(addressCoordinates),
    enabled: !!currentPosition || !!address ,
  })

  const mapCenter = address
    ? addressCoordinates
    : {
      lat: 48.780747715195936, 
      lng: 2.659422655579425
    }


  return (
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <div className="px-3 pb-2 flex flex-col justify-end row-span-1">
        <h2 className="text-primary font-bold text-lg">
          Carte interactive
        </h2>
      </div>
      <MapContainer
        className="m-3 row-span-9 rounded-md"
        center={mapCenter}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { currentPosition && <Marker position={currentPosition} />}
        <LocationMarker
          containerList={containerList}
          position={mapCenter}
        />
      </MapContainer>
      <div className="px-3 row-span-2 flex flex-col gap-2 overflow-hidden">
        <AddressCombobox setAddress={setAddress} />
        <p className="text-xs text-muted-foreground font-bold">
          Sélectionner une adresse, puis cliquer sur un popup.
        </p>
      </div>
    </div>
  )
}
