import { ILoginFormEvent, ILoginFormResult } from '../../types'
import { Input } from '../../ui/Input/Input'

type ILoginpPageProps = {
  onSubmit: (formResult: ILoginFormResult) => void
}

export function LoginPage({ onSubmit }: ILoginpPageProps) {
  const submitLoginForm = (event: React.FormEvent<ILoginFormEvent>) => {
    event.preventDefault()

    const formElements = event.currentTarget.elements

    onSubmit({ email: formElements.email.value, password: formElements.pswd.value })
  }

  return (
    <div className='main main-login'>
      <div className='form'>
        <form onSubmit={submitLoginForm}>
          <label aria-hidden='true'>Вход</label>
          <Input type='email' name='email' placeholder='Email' />
          <Input type='password' name='pswd' placeholder='Password' />
          <button>Войти</button>
        </form>
      </div>
    </div>
  )
}
