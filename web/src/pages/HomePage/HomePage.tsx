import { Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Redirect to={routes.pokemons()}></Redirect>
    </>
  )
}

export default HomePage
