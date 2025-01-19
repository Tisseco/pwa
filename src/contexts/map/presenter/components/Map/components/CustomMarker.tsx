import { ReactNode } from "react";
import L, { IconOptions } from "leaflet";
import { Marker, MarkerProps } from "react-leaflet";

import { Coordinates } from '@/contexts/map/presenter/components/Map/types'
import { CustomPopup } from "@/contexts/map/presenter/components/Map/components/CustomPopup";

const baseIconOption = {
  iconUrl: "/marker-icon-2x-blue.png", // Default marker
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  // shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41], // Size of the shadow
} satisfies IconOptions

const blueMarker = L.icon(baseIconOption);
const redMarker = L.icon({ ...baseIconOption, iconUrl: "/marker-icon-2x-red.png" });

const MarkerIcons = {
  blue: blueMarker,
  red: redMarker
}

export function CustomMarker({
  position,
  color = 'blue',
  children,
  ...props
}: {
  position: Coordinates
  color?: 'blue' | 'red'
  children?: ReactNode
} & MarkerProps) {
  
  return (
    <Marker icon={MarkerIcons[color]} position={position} {...props}>
      { children && (
        <CustomPopup>
          {children}
        </CustomPopup>
      )}
    </Marker>
  )
}