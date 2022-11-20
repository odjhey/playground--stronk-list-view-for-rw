import {} from 'src/lib/formatters'

import type { FindPokemonByName } from 'types/graphql'

interface Props {
  pokemon: NonNullable<FindPokemonByName['pokemon']>
}

const Pokemon = ({ pokemon }: Props) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Pokemon {pokemon.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{pokemon.name}</td>
            </tr>
            <tr>
              <th>No</th>
              <td>{pokemon.no}</td>
            </tr>
            <tr>
              <th>Speed</th>
              <td>{pokemon.speed}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{pokemon.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Pokemon
