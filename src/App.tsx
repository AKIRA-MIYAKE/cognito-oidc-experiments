import type { VFC } from 'react'
import { AuthenticationProvider } from '@axa-fr/react-oidc-context'

import AppRouter from './AppRouter'
import oidcConfiguration from './oidc-configuration'

const App: VFC = () => {
  return (
    <AuthenticationProvider configuration={oidcConfiguration}>
      <AppRouter />
    </AuthenticationProvider>
  )
}

export default App;
