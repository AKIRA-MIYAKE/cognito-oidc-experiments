import type { VFC } from 'react'

import { useCallback } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'

import AppNavigation from '../../components/AppNavigation'

const SignInPage: VFC = () => {
  const { login } = useReactOidc()

  const onSignInButtonClick = useCallback(() => {
    login()
  }, [login])

  return (
    <div>
      <AppNavigation />
      <h1>SignIn</h1>
      <button onClick={onSignInButtonClick}>SignIn</button>
    </div>
  )
}

export default SignInPage
