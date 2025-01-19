
export type PostReportFormPayload = Readonly<{
  coordinates?: {
    lat: number,
    lng: number,
  }
  picture?: File
  type: 'FULL' | 'DEGRADED'
}>

export type PostReportFormSuccess = Readonly<{
  message: 'success'  
}>
