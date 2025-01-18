import { useEffect, useState } from 'react'
import {
  createFileRoute,
  useNavigate,
} from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LocateOff, Navigation } from 'lucide-react'

import { Button } from '@/contexts/shared/presenter/components/ui/button'
import { Skeleton } from '@/contexts/shared/presenter/components/ui/skeleton'

const customIcon = L.icon({
  iconUrl: "marker-icon-2x-red.png", // Default marker
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  // shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41], // Size of the shadow
});

const fetchNearestContainer = () => [
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

export const Route = createFileRoute('/points-de-collecte-les-plus-proches')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate({
    from: '/points-de-collecte-les-plus-proches',
  })
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(
    null,
  )
  const [hasAttemptedGeo, setHasAttemptedGeo] = useState(false); // État pour suivre la tentative d'accès
  // status
  //
  //  idle
  //  hasAttemptedGeo
  //  success
  //

  const { data, isLoading } = useQuery({
    queryKey: ['fetchNearestContainer'],
    queryFn: fetchNearestContainer,
    gcTime: 0,
    enabled: !!currentPosition, // La requête ne s'exécute que si la position est disponible
  })

  const handleAllowGps = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setHasAttemptedGeo(true)
        },
        (error) => {
          console.error("Erreur lors de l'accès à la géolocalisation:", error);
          setHasAttemptedGeo(true)
        }
      );
    }
  };

  useEffect(() => {
    handleAllowGps()
  }, [])

  console.count('render')
  return (
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <div className="px-3 pb-2 flex flex-col justify-end">
        <h2 className="text-primary font-bold text-lg">Points de collecte les plus proches</h2>
      </div>
      {!currentPosition && hasAttemptedGeo && (
        <div className="m-3 row-span-9 rounded-md bg-primary-foreground flex flex-col gap-4 justify-center items-center text-center text-primary">
          <LocateOff absoluteStrokeWidth size={64} />
          <p>Veuillez autoriser l'accès à votre position actuelle</p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleAllowGps}
          >
            Autoriser le GPS
          </Button>
        </div>
      )}
      {!currentPosition && !hasAttemptedGeo && <Skeleton className="m-3 row-span-9 rounded-md" />}
      {isLoading && <Skeleton className="m-3 row-span-9 rounded-md" />}
      {data && (
        <MapContainer
          className="m-3 row-span-9 rounded-md"
          center={data[0].coordinates}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={customIcon} position={currentPosition}>
            <Popup />
          </Marker>
          {data.map((container, i) => (
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
          ))}
        </MapContainer>
      )}
      <div className="px-3 row-span-2 flex flex-col gap-2">
        <p className="text-xs text-muted-foreground font-bold">Cliquer sur un pin pour afficher les informations d'un point.</p>
        <Button
          className="w-full"
          size="lg"
          onClick={() =>
            navigate({ to: '/carte-interactive' })
          }
        >
          Utiliser la carte interactive
        </Button>
      </div>
    </div>
  )
}
