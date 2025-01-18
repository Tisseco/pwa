import { Button } from '@/contexts/shared/presenter/components/ui/button'
import { Separator } from '@/contexts/shared/presenter/components/ui/separator'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, useLoaderData, useNavigate, useParams } from '@tanstack/react-router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/contexts/shared/presenter/components/ui/dialog"
import { Input } from "@/contexts/shared/presenter/components/ui/input"
import { MapPin, Puzzle } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const createReportQueryOptions = (areaId) =>
  queryOptions({
    queryKey: ['reportForm', areaId],
    queryFn: () => {
      console.log('data is fetching')
      return {
        address: {
          streetNumber: '63',
          streetName: 'Avenue du général Leclerc',
          city: 'Sucy-en-Brie',
          zipCode: 94370,
        },  
        coordinates: {
          lat: 51.505,
          lng: -0.09
        }
      }
    },
  })

export const Route = createFileRoute(
  '/report/$areaId/confirmer-la-localisation',
)({
  loader: ({ context: { queryClient }, params }) => queryClient.ensureQueryData(createReportQueryOptions(params.areaId)),
  pendingComponent: () => <div className='w-screen h-screen flex justify-center items-center'>
    <div className='flex flex-col gap-4 items-center'>
      <div className='bg-primary rounded-full p-5'>
        <Puzzle size={64} color='white'/>
      </div>
      <h1 className='text-xl font-black text-primary'>Tisseco</h1>
    </div>
  </div>,
  component: AddressConfirmation,
})

function AddressConfirmation() {
  const { areaId } = useParams({
    from: '/report/$areaId/confirmer-la-localisation',
  })
  const { data } = useSuspenseQuery(createReportQueryOptions(areaId))
  const navigate = useNavigate()

  if (data) {
    console.log("🚀 ~ AddressConfirmation ~ data:", data)
    return (
    <Dialog>
      <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
        <div className="px-3 pb-2 flex items-end bg-primary">
          <h1 className="text-primary-foreground font-bold text-xl">
            Signalement
          </h1>
        </div>
        <div className="px-3 pb-2 flex flex-col justify-end">
          <h2 className="text-primary font-bold text-lg">
            Confirmation de l'adresse
          </h2>
          <Separator />
        </div>
        <MapContainer
          className="mx-3 row-span-6"
          center={data.coordinates}
          zoom={18}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={data.coordinates}>
            {/* <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
          </Marker>
        </MapContainer>
        <section className="px-3 row-span-2">
          <Separator className="my-2"/>
          <h1 className="text-primary font-bold text-xl">Êtes-vous ici ?</h1>
          <p className="text-primary">{`${data.address.streetNumber}, ${data.address.streetName}`}</p>
          <p className="text-primary font-bold">{`${data.address.city}, ${data.address.zipCode}`}</p>
        </section>
        <div className="px-3 row-span-2 flex flex-col gap-2">
          <DialogTrigger asChild>
            <Button
              className="w-full"
              variant="outline"
              size="lg"
            >
              Signaler l'erreur d'adressage
            </Button>
          </DialogTrigger>
          <Button
            className="w-full"
            size="lg"
            onClick={() => navigate({ to: `/report/${areaId}/signalement` })}
          >
            Confirmer l'adresse
          </Button>
        </div>
      </div>
      <DialogContent className="z-[1000] sm:max-w-[425px]">
          <VisuallyHidden>
            <DialogHeader>
                <DialogTitle>Envoyer ma position</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
          </VisuallyHidden>
        <div className="grid gap-4 py-4">
          <Button><MapPin />Envoyer ma localisation</Button>
          <div className="flex flex-row items-center justify-center">
            <Separator className='w-24'/>
            <p className='text-center font-bold px-4'>Ou</p>
            <Separator className='w-24'/>
          </div>
          <div>
            <Input className='w-full' type='text' placeholder='Envoyer ma localisation'></Input>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => navigate({ to: `/report/${areaId}/signalement` })}>Envoyer ma position</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )}
}
