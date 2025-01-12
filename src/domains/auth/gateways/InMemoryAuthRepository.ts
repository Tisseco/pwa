import { AuthRepository } from "@/domains/auth/domain/AuthRepository";
import { LoginPayload, LoginError, LoginSuccess } from "@/domains/auth/domain/types/loginTypes";
import { UniqueId, Role } from "@/domains/shared/entities/shared-kernel";
import { LogoutPayload, LogoutSuccess, LogoutError } from "@/domains/auth/domain/types/logoutTypes";

type InMemoryAuthRepositoryDataSource = {
  id: UniqueId
  username: string
  email: string
  password: string
  role: Role
  token: string
}[]

export class InMemoryAuthRepository implements AuthRepository {
    
  private dataSource;
    
  constructor(dataSource: InMemoryAuthRepositoryDataSource){
    this.dataSource = dataSource
  }

  async login({ email, password }: LoginPayload): Promise<LoginSuccess | LoginError> {
    return new Promise((resolve) => {
      const user = this.dataSource.find(user => user.email === email)
      
      if (password === user?.password) {
        resolve({
          type: "bearer",
          name: user.username,
          token: user.token,
          abilities: [ user.role ],
          lastUsedAt: null,
          expiresAt: "2025-01-04T16:45:25.353Z"
        })
      }

      resolve({
        errors: [
          {
            message: "Invalid user credentials"
          }
        ]
      })

    })
  }

  logout({ token }: LogoutPayload): Promise<LogoutSuccess | LogoutError> {
    return new Promise((resolve) => {
      const user = this.dataSource.find(user => user.token === token)
      
      if (!user) {
        resolve({
          errors: [
            {
              message: "Unauthorized access"
            }
          ]
      })
      }
      resolve({ message: "success" })
    })
  }
}