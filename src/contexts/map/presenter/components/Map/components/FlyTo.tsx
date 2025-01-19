import { useMap } from "react-leaflet"

import { Coordinates } from '@/contexts/map/presenter/components/Map/types'

export function FlyTo({ position }: { position: Coordinates }) {
  const map = useMap()

  if(position) map.flyTo(position)

  return <></>
}