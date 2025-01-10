import { Role, UniqueId } from "@/domains/shared/entities/shared-kernel";

export type User = {
  id : UniqueId
  username : string
  email : string
  password : string
  role : Role
  createdAt : string
  updatedAt : string
}
