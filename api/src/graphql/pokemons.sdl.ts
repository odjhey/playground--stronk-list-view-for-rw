export const schema = gql`
  type Pokemon {
    name: String!
    no: Int!
    speed: Int!
    type: String!
  }

  type Query {
    pokemons: [Pokemon!]! @requireAuth
    pokemon(name: String!): Pokemon @requireAuth
  }
`
