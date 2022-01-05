import type { NavLinkProps } from 'react-router-dom'
import { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useReactOidc } from '@axa-fr/react-oidc-context'

const PrivateNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(((props, ref) => {
  const { oidcUser } = useReactOidc()

  if (!oidcUser) {
    return <>{props.children}</>
  }

  return <NavLink {...props} ref={ref} />
}))

PrivateNavLink.displayName = 'PrivateNavLink'

export default PrivateNavLink
