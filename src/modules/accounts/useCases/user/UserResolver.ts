import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Mutation, Resolver } from "type-graphql";

@Resolver(of => User)
class UserResolver {

  @Mutation(() => User)
  async singUp(name: string,
    password: string,
    email: string, idgroup: number) {

  }
}


export { UserResolver }