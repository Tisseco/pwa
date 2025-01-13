import { ScheduledTourDetails } from "@/contexts/TourManagement/domain/aggregates/scheduledToursDetails"
import { driverFetchHisOwnScheduledTourDetailsUseCase } from "@/contexts/TourManagement/domain/use-cases/driverFetchHisOwnScheduledTourDetails"
import { InMemoryScheduledTourDetailsRepository } from "@/contexts/TourManagement/gateways/InMemorySheduledTourDetailsRepository"
import { scheduledTourDetailsRepositoryDataSourceMock } from "@/contexts/tests/TourManagement/use-cases/mock/scheduledTourDetailsRepositoryDataSourceMock"

describe('Auth | Functional | Use-cases | TourManagement', () => {

  const dataSource = [
    {
      id: 1,
      assignedTo: 1,
      scheduledBy: 1,
      status: "PENDING",
      scheduledFor: '2025-01-04T16:45:25.353Z',
      tourId: 1,
      userAssigned: {
        id: 2,
        email: '',
        createdAt: '2025-01-04T16:45:25.353Z',
        updatedAt: '2025-01-04T16:45:25.353Z',
        role: "DRIVER",
        username: '',
        password: ''
      },
      userScheduler: {
        id: 1,
        email: '',
        createdAt: '2025-01-04T16:45:25.353Z',
        updatedAt: '2025-01-04T16:45:25.353Z',
        role: 'SUPERVISOR',
        username: '',
        password: ''
      },
      vehicle: {
        id: 1,
        brand: 'renault',
        color: 'white',
        fuelType: 'ESSENCE',
        licensePlate: 'EZ845CN',
        mileage: 234,
        model: 'trafic',
        purchaseDate: '2025-01-04T16:45:25.353Z',
        purchasePrice: 234,
        status: 'UNDER REPAIR',
        type: "CAR",
        vin: '23432',
        year: 2016
      },
      tour: {
        id: 1,
        name: 'A',
        tourSteps: [
          {
            id: 1,
            order: 1,
            siteId: 1,
            tourId: 1,
            site: {
              id: 1,
              type: 'CONTAINER',
              addressId: 1,
              address: {
                id: 1,
                name: 'Banque Caixa',
                streetNumber: 4,
                streetNumberExtension: '',
                streetName: 'Rue du Moulin Bateau',
                city: 'Sucy-en-Brie',
                zipCode: 94370,
                department: 'Val-de-Marne',
                stateCode: 77,
                coordinates: {
                  latitude: 48.778805,
                  longitude: 2.510963
                }
              },
              areas: [
                {
                  id: 1,
                  siteId: 1,
                  description: '',
                  size: 'LARGE',
                  coordinates: {
                    latitude: 48.778805,
                    longitude: 2.510963
                  },
                  container: {
                    id: 1,
                    areaId: 1,
                    color: 'B',
                    condition: 'AVERAGE CONDITION',
                    key: 'CF3',
                    size: 'LARGE',
                    status: 'IN SERVICE'
                  }
                },
                {
                  id: 2,
                  siteId: 1,
                  description: '',
                  size: 'LARGE',
                  coordinates: {
                    latitude: 48.778805,
                    longitude: 2.510963
                  },
                  container: {
                    id: 2,
                    areaId: 2,
                    color: 'B',
                    condition: 'AVERAGE CONDITION',
                    key: 'CF3',
                    size: 'LARGE',
                    status: 'IN SERVICE'
                  }
                }
              ]
            }
          },
          {
            id: 2,
            order: 2,
            siteId: 2,
            tourId: 1,
            site: {
              id: 2,
              type: 'CONTAINER',
              addressId: 2,
              address: {
                id: 2,
                name: 'Station Total accès',
                streetNumber: 63,
                streetNumberExtension: '',
                streetName: 'Avenue du général leclerc',
                city: 'Sucy-en-Brie',
                zipCode: 94370,
                department: 'Val-de-Marne',
                stateCode: 94,
                coordinates: {
                  latitude: 48.777403,
                  longitude: 2.511095
                }
              },
              areas: [
                {
                  id: 3,
                  siteId: 2,
                  description: '',
                  size: 'LARGE',
                  coordinates: {
                    latitude: 48.778805,
                    longitude: 2.510963
                  },
                  container: {
                    id: 2,
                    areaId: 3,
                    color: 'B',
                    condition: 'AVERAGE CONDITION',
                    key: 'CF3',
                    size: 'LARGE',
                    status: 'IN SERVICE'
                  }
                },
                {
                  id: 4,
                  siteId: 2,
                  description: '',
                  size: 'LARGE',
                  coordinates: {
                    latitude: 48.778805,
                    longitude: 2.510963
                  },
                  container: {
                    id: 4,
                    areaId: 4,
                    color: 'B',
                    condition: 'AVERAGE CONDITION',
                    key: 'CF3',
                    size: 'LARGE',
                    status: 'IN SERVICE'
                  }
                }
              ]
            }
          },
          {
            id: 3,
            order: 5234,
            siteId: 3,
            tourId: 1,
            site: {
              id: 3,
              type: 'CONTAINER',
              addressId: 3,
              address: {
                id: 3,
                name: 'Banque Populaire',
                streetNumber: 9,
                streetNumberExtension: 'Ter',
                streetName: 'Rue Pierre Sémard',
                city: 'Sucy-en-Brie',
                zipCode: 94370,
                department: 'Val-de-Marne',
                stateCode: 94,
                coordinates: {
                  latitude: 48.777403,
                  longitude: 2.511095
                }
              },
              areas: [
                {
                  id: 5,
                  siteId: 3,
                  description: '',
                  size: 'LARGE',
                  coordinates: {
                    latitude: 48.778805,
                    longitude: 2.510963
                  },
                  container: {
                    id: 5,
                    areaId: 5,
                    color: 'B',
                    condition: 'AVERAGE CONDITION',
                    key: 'CF3',
                    size: 'LARGE',
                    status: 'IN SERVICE'
                  }
                },
                {
                  id: 6,
                  siteId: 3,
                  description: '',
                  size: 'LARGE',
                  coordinates: {
                    latitude: 48.778805,
                    longitude: 2.510963
                  },
                  container: {
                    id: 6,
                    areaId: 6,
                    color: 'B',
                    condition: 'AVERAGE CONDITION',
                    key: 'CF3',
                    size: 'LARGE',
                    status: 'IN SERVICE'
                  }
                }
              ]
            }
          },
          {
            id: 4,
            order: 34,
            siteId: 4,
            tourId: 1,
            site: {
              id: 4,
              type: 'CONTAINER',
              addressId: 4,
              address: {
                id: 4,
                name: 'Point verres',
                streetNumber: 18,
                streetNumberExtension: '',
                streetName: 'Avenue du Fort',
                city: 'Sucy-en-Brie',
                zipCode: 94370,
                department: 'Val-de-Marne',
                stateCode: 94,
                coordinates: {
                  latitude: 48.777403,
                  longitude: 2.511095
                }
              },
              areas: [
                {
                  id: 7,
                  siteId: 4,
                  description: '',
                  size: 'LARGE',
                  coordinates: {
                    latitude: 48.778805,
                    longitude: 2.510963
                  },
                  container: {
                    id: 7,
                    areaId: 7,
                    color: 'B',
                    condition: 'AVERAGE CONDITION',
                    key: 'CF3',
                    size: 'LARGE',
                    status: 'IN SERVICE'
                  }
                },
                {
                  id: 8,
                  siteId: 4,
                  description: '',
                  size: 'LARGE',
                  coordinates: {
                    latitude: 48.778805,
                    longitude: 2.510963
                  },
                  container: {
                    id: 8,
                    areaId: 6,
                    color: 'B',
                    condition: 'AVERAGE CONDITION',
                    key: 'CF3',
                    size: 'LARGE',
                    status: 'IN SERVICE'
                  }
                }
              ]
            }
          }
        ]
      },
      pickups: [{
        id: 1,
        areaId: 1,
        condition: "AVERAGE CONDITION",
        fillingLevel: 'ALMOST EMPTY',
        pickedUpAt: '2025-01-04T16:45:25.353Z',
        scheduledTourId: 1,
        weight: 12
      }]
    }
  ] as ScheduledTourDetails[]

  it('Should return a list with one item', async () => {
    // GIVEN driverFetchHisOwnScheduledToursDetails use case is instancified with InMemoryRepository
    const driverFetchHisOwnScheduledTourDetailsUseCaseWithInMemoryScheduledTourDetailsRepository = driverFetchHisOwnScheduledTourDetailsUseCase(new InMemoryScheduledTourDetailsRepository(scheduledTourDetailsRepositoryDataSourceMock, 1))
    
    // WHEN driverFetchHisOwnScheduledToursDetails use case is called with an existant id
    const driverOwnScheduledToursDetails = await driverFetchHisOwnScheduledTourDetailsUseCaseWithInMemoryScheduledTourDetailsRepository('fakeToken')
    
    // THEN Should return a list with one item
    expect(driverOwnScheduledToursDetails).toEqual(dataSource)
  })

  it('Should return an empty list', async () => {
    // GIVEN driverFetchHisOwnScheduledToursDetails use case is instancified with InMemoryRepository
    const driverFetchHisOwnScheduledTourDetailsUseCaseWithInMemoryScheduledTourDetailsRepository = driverFetchHisOwnScheduledTourDetailsUseCase(new InMemoryScheduledTourDetailsRepository(dataSource, 2))
    
    // WHEN driverFetchHisOwnScheduledToursDetails use case is invoked with an ID that does not exist
    const driverOwnScheduledToursDetails = await driverFetchHisOwnScheduledTourDetailsUseCaseWithInMemoryScheduledTourDetailsRepository('fakeToken')
    
    // THEN driverOwnScheduledToursDetails return a empty list
    expect(driverOwnScheduledToursDetails).toEqual([])
  })
  
})
  