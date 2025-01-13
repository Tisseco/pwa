import { Link, useRouteContext } from "@tanstack/react-router"
import { Badge } from "@/contexts/shared/presenter/components/ui/badge"
import { Card, CardHeader, CardContent, CardFooter } from "@/contexts/shared/presenter/components/ui/card"
import { scheduledTourCatalogMap } from "@/contexts/TourManagement/presenter/mappers/scheduledTourCatalogMap"

type TourCardRowProps = {
    label: string,
    value: string
  }
  
const TourCardRow = ({ label, value} : TourCardRowProps) => {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-muted-foreground leading-7">{label}</p>
      <p className="leading-7">{value}</p>
    </div>
  )
}
  
type TourCardProps = {
  name: string
  status: string
  nbrContainers: string
  nbrDeliveries?: string | null
  vehicleBrand: string
  vehicleModel: string
  vehicleLicensePlate: string
}
  
const TourCard = ({ name, status, nbrContainers, nbrDeliveries, vehicleBrand, vehicleModel, vehicleLicensePlate }: TourCardProps) => {
  const { i18n: { t } } = useRouteContext({ from: '__root__' })
  return (
    <Card role="link">
      <CardHeader className="p-3">
        <div className="flex flex-row justify-between">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{name}</h4>
          <p className="leading-7">{status}</p>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Informations</h4>
        <TourCardRow label="Nombre de conteneur" value={nbrContainers}/>
        { nbrDeliveries && <TourCardRow label="Nombre de livraison" value={nbrDeliveries}/> }
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{t('glossary:vehicle')}</h4>
        <TourCardRow label="Marque" value={vehicleBrand}/>
        <TourCardRow label="Modèle" value={vehicleModel}/>
        <TourCardRow label="N° immatriculation" value={vehicleLicensePlate}/>
      </CardContent>
      <CardFooter className="p-3 gap-3">
        { nbrContainers && <Badge className="select-none" variant="secondary">Pick-up</Badge>}
        { nbrDeliveries && <Badge className="select-none" variant="secondary">{t('glossary:delivery')}</Badge>}
      </CardFooter>
    </Card>
  )
}

export const ScheduledTourCatalog = ({ scheduledTourDetailsList } : { scheduledTourDetailsList: ReturnType<typeof scheduledTourCatalogMap>}) => {
  return (
    <div>
      {scheduledTourDetailsList.map(scheduledTour => {
        return <Link
          key={`scheduledTour-${scheduledTour.id}`} 
          to='/scheduled-tours/$scheduledTourId'
          params={{ scheduledTourId: scheduledTour.id.toString() }}
        >
          <TourCard 
            {...scheduledTour}
          />
        </Link>
      })}
    </div>
  )
}
