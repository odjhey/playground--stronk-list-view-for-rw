import type { FindPokemons } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { truncate } from 'src/lib/formatters'

const PokemonsList = ({ pokemons }: FindPokemons) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>No</th>
            <th>Speed</th>
            <th>Type</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{truncate(pokemon.name)}</td>
              <td>{truncate(pokemon.no)}</td>
              <td>{truncate(pokemon.speed)}</td>
              <td>{truncate(pokemon.type)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.pokemon({ name: pokemon.name })}
                    title={'Show pokemon ' + pokemon.name + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PokemonsList
