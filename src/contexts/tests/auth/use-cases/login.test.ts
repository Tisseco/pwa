import { loginUseCase } from "@/contexts/auth/domain/use-cases/login"
import { InMemoryAuthRepository } from "@/contexts/auth/gateways/InMemoryAuthRepository"

describe('Auth | Functional | Use-cases | Login', () => {

  // GIVEN login use case is instancified with InMemoryRepository
  const loginUseCaseWithInMemoryAuthRepository = loginUseCase(new InMemoryAuthRepository([{
    id: 1,
    email: 'fverin.recrutement@gmail.com',
    password: 'test',
    role: 'DRIVER',
    username: 'fansoa',
    token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI'
  }]))

  it('Should be called with valid credentials', async () => {
    // WHEN login use case is called with valid credentials
    const loginUseCaseCalledWithValidCredentials = await loginUseCaseWithInMemoryAuthRepository({ email: 'fverin.recrutement@gmail.com', password: 'test'})

    //THEN login use case should return a token
    expect(loginUseCaseCalledWithValidCredentials).toEqual({
      type: 'bearer',
      name: 'fansoa',
      token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI',
      abilities: ['DRIVER'],
      lastUsedAt: null,
      expiresAt: '2025-01-04T16:45:25.353Z'
    })
  })

  it('Should be called with invalid credentials', async () => {
    // WHEN login use case is called with invalid credentials
    const loginUseCaseCalledWithInvalidCredentials = await loginUseCaseWithInMemoryAuthRepository({
      email: 'fverin.recrutement@gmail.com',
      password: 'wrong password'
    })

    // THEN login use case should return an error message
    expect(loginUseCaseCalledWithInvalidCredentials).toEqual({
      errors: [
        { message: "Invalid user credentials" }
      ]
    })
  })

})
