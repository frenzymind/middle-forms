import './App.css'
import { LoginSignPage } from './pages/LoginSignPage/LoginSignPage'
import { ISignFormResult } from './pages/LoginSignPage/types'

function App() {
  const handleFormSubmit = (formResult: ISignFormResult) => {
    if (formResult.action === 'login') {
      console.log('Someone want to login', formResult)
    } else {
      console.log('Someone want to signup', formResult)
    }
  }

  return <LoginSignPage onSubmit={handleFormSubmit} />
}

export default App
