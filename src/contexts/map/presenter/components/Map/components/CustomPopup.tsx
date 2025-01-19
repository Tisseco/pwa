import { PopupOptions } from "leaflet";
import { ReactNode } from "react";
import { Popup } from "react-leaflet";

export function CustomPopup({ children, ...props }: { children: ReactNode } & PopupOptions) {
  return (
    <Popup {...props}>
      {children}
    </Popup>
  )
}