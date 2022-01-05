import type { VFC } from 'react'

import AppNavigation from '../../components/AppNavigation'

const PublicPage: VFC = () => {
  return (
    <div>
      <AppNavigation />
      <h1>Public</h1>
    </div>
  )
}

export default PublicPage
