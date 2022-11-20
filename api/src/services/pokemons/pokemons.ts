import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const pokemons: QueryResolvers['pokemons'] = () => {
  return db.pokemon.findMany()
}

export const pokemon: QueryResolvers['pokemon'] = ({ name }) => {
  return db.pokemon.findUnique({
    where: { name },
  })
}
