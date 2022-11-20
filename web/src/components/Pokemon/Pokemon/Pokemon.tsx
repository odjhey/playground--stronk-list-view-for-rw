import {} from 'src/lib/formatters'

import type { FindPokemonByName } from 'types/graphql'

interface Props {
  pokemon: NonNullable<FindPokemonByName['pokemon']>
}

const Pokemon = ({ pokemon }: Props) => {
  return (
    <>
      <div>
        <header>
          <h2>Pokemon {pokemon.name} Detail</h2>
        </header>
        <table className="table table-zebra">
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
