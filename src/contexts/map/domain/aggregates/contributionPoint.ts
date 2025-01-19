export type contributionPoint = Readonly<{
  name: string
  address: string
  city: string
  zipCode: string
  coordinates: {
    lat: number
    lng: number
  }
}>
