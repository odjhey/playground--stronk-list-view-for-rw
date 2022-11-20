import type { FindPokemonByName } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Pokemon from 'src/components/Pokemon/Pokemon'

export const QUERY = gql`
  query FindPokemonByName($name: String!) {
    pokemon: pokemon(name: $name) {
      name
      no
      speed
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Pokemon not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div>{error?.message}</div>
)

export const Success = ({ pokemon }: CellSuccessProps<FindPokemonByName>) => {
  return <Pokemon pokemon={pokemon} />
}
