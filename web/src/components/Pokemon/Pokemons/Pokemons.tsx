import type { FindPokemons } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { truncate } from 'src/lib/formatters'

const PokemonsList = ({ pokemons }: FindPokemons) => {
  return (
    <div>
      <table className="table table-zebra">
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
                <nav>
                  <Link
                    className="btn btn-sm"
                    to={routes.pokemon({ name: pokemon.name })}
                    title={'Show pokemon ' + pokemon.name + ' detail'}
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
