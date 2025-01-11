import { logoutUseCase } from "@/domains/auth/domain/use-cases/logout"
import { InMemoryAuthRepository } from "@/domains/auth/gateways/InMemoryAuthRepository"

describe('Auth | Functional | Use-cases | Logout', () => {

  // GIVEN logout use case is instancified with InMemoryRepository
  const logoutUseCaseWithInMemoryAuthRepository = logoutUseCase(new InMemoryAuthRepository([{
    id: 1,
    email: 'fverin.recrutement@gmail.com',
    password: 'test',
    role: 'DRIVER',
    username: 'fansoa',
    token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI'
  }]))

  it('Should be called with valid token', async () => {
    // WHEN logout use case is called with valid token
    const logoutUseCaseCalledWithValidCredentials = await logoutUseCaseWithInMemoryAuthRepository({
      token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI'
    })

    //THEN logout use case shoud return a success message
    expect(logoutUseCaseCalledWithValidCredentials).toEqual({
      message: 'success'
    })
  })

  it('Should be called with invalid token', async () => {
    // WHEN logout use case is called with invalid token
    const logoutUseCaseCalledWithInvalidCredentials = await logoutUseCaseWithInMemoryAuthRepository({
      token: 'wrong token',
    })

    // THEN logout use case shoud error message
    expect(logoutUseCaseCalledWithInvalidCredentials).toEqual({
      errors: [
        { message: "Unauthorized access" }
      ]
    })
  })

})
