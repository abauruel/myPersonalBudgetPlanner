import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    categories: [Category]
    getSubCategoriesByCategoryId(idCategory: ID!): [SubCategory]
  }

  type Category {
    name: String
  }

  type SubCategory {
    name: String
    idcategory: Int
  }
`
export { typeDefs }