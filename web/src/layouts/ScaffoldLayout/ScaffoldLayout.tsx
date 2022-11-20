import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children: React.ReactNode
}

const ScaffoldLayout = ({ title, titleTo, children }: LayoutProps) => {
  return (
    <div>
      <Toaster toastOptions={{ className: '', duration: 6000 }} />
      <header>
        <h1>
          <Link to={routes[titleTo]()}>{title}</Link>
        </h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default ScaffoldLayout
