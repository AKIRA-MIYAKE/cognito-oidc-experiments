import type { VFC } from 'react'
import { NavLink } from 'react-router-dom'
import { useReactOidc } from '@axa-fr/react-oidc-context'

import PrivateNavLink from '../PrivateNavLink'

const AppNavigation: VFC = () => {
  const { oidcUser } = useReactOidc()

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Index</NavLink>
        </li>
        <li>
          <NavLink to="/public">Public</NavLink>
        </li>
        <li>
          <PrivateNavLink to="/private">Private</PrivateNavLink>
        </li>
        {!oidcUser && (
          <li>
            <NavLink to="/signin">SingIn</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default AppNavigation
