import PokemonCell from 'src/components/Pokemon/PokemonCell'

type PokemonPageProps = {
  name: string
}

const PokemonPage = ({ name }: PokemonPageProps) => {
  return <PokemonCell name={name} />
}

export default PokemonPage
