import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    categories: [Category]
    getSubCategoriesByCategoryId(idCategory: ID!): [SubCategory]
  }

  type Mutation {
    createCategory2(name: String!): CategoryPayload
  }

  type Category {
    id: ID!
    name: String!
    subcategories: [SubCategory]
  }

  type SubCategory {
    name: String!
    category: Category!
  }


  type UserError {
    message: String!
  }

  type CategoryPayload {
    userErrors: [UserError!]!
    category: Category
  }
`
export { typeDefs }