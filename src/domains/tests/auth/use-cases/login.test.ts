import { loginUseCase } from "@/domains/auth/domain/use-cases/login"
import { InMemoryAuthRepository } from "@/domains/auth/gateways/InMemoryAuthRepository"

describe('Auth | Functional | Use-cases | Login', () => {

  it('Should be called with valid credential', async () => {
    // GIVEN login useCase is instancified with InMemoryRepository
    const loginUseCaseWithInMemoryAuthRepository = loginUseCase(new InMemoryAuthRepository([{
      id: 1,
      email: 'fverin.recrutement@gmail.com',
      password: 'test',
      role: 'DRIVER',
      username: 'fansoa',
      token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI'
    }]))
    
    // WHEN login use-cases is called with valid credentials
    const loginUseCaseCalledWithValidCredentials = await loginUseCaseWithInMemoryAuthRepository({ email: 'fverin.recrutement@gmail.com', password: 'test'})

    //THEN login use-cases shoud return token
    expect(loginUseCaseCalledWithValidCredentials).toEqual({
      type: 'bearer',
      name: 'fansoa',
      token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI',
      abilities: ['DRIVER'],
      lastUsedAt: null,
      expiresAt: '2025-01-04T16:45:25.353Z'
    })
  })

})
