export const getAddressListAPIDataGouv = async (value: string) : Promise<AddressApiDataGouv> => {
  return fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}`).then(res => res.json())
}

export type Feature = {
  type: string
  geometry: {
    type: "Point"
    coordinates: number[]
  }
  properties: {
    label: string
    score: number
    housenumber: string
    id: string
    type: string
    name: string
    postcode: string
    citycode: string
    x: number
    y: number
    city: string
    context: string
    importance: number
    street: string
  }
} 

export type AddressApiDataGouv = {
  type: string
  version: string
  features: Feature[]
  attribution: string
  licence: string
  query: string
  limit: number
}
