import type { FindPokemons } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Pokemons from 'src/components/Pokemon/Pokemons'

export const QUERY = gql`
  query FindPokemons {
    pokemons {
      name
      no
      speed
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pokemons yet. '}
      <Link to={routes.newPokemon()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ pokemons }: CellSuccessProps<FindPokemons>) => {
  return <Pokemons pokemons={pokemons} />
}
