import './App.css'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { SignupPage } from './pages/SignupPage/SignupPage'
import { ILoginFormResult, ISignupFormResult } from './types'

function App() {
  const handleSignupSubmit = (formResult: ISignupFormResult) => {
    console.log('Someone want to signup', formResult)
  }

  const handleLoginSubmit = (formResult: ILoginFormResult) => {
    console.log('Someone want to signup', formResult)
  }

  return (
    <>
      <SignupPage onSubmit={handleSignupSubmit} />
      <LoginPage onSubmit={handleLoginSubmit} />
    </>
  )
}

export default App
