import { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import IndexPage from '../pages/IndexPage'
import SignInPage from '../pages/SignInPage'
import PublicPage from '../pages/PublicPage'
import PrivatePage from '../pages/PrivatePage'
import AuthenticationCallbackPage from '../pages/authentication/CallbackPage'
import AuthenticationSilentCallbackPage from '../pages/authentication/SilentCallbackPage'

const AppRouter: VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="public" element={<PublicPage />} />
        <Route path="private" element={<PrivatePage />} />
        <Route path="authentication">
          <Route path="callback" element={<AuthenticationCallbackPage />} />
          <Route path="silent_callback" element={<AuthenticationSilentCallbackPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
