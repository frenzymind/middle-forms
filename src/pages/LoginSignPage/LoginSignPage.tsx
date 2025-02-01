import { FormEvent } from 'react'
import './LoginSignPage.css'
import { ILoginFormEvent, ISex, ISignFormResult, ISignUpFormEvent } from './types'
import { Input } from '../../ui/Input/Input'

type ILoginSignPageProps = {
  onSubmit: (formResult: ISignFormResult) => void
}

export function LoginSignPage({ onSubmit }: ILoginSignPageProps) {
  const submitLoginForm = (event: React.FormEvent<ILoginFormEvent>) => {
    event.preventDefault()

    const formElements = event.currentTarget.elements

    onSubmit({ action: 'login', email: formElements.email.value, password: formElements.pswd.value })
  }

  const submitSignUpForm = (event: FormEvent<ISignUpFormEvent>) => {
    event.preventDefault()
    console.log(event)

    const formElements = event.currentTarget.elements

    onSubmit({
      action: 'signup',
      email: formElements.email.value,
      name: formElements.userName.value,
      nick: formElements.nickName.value,
      sex: formElements.sex.value as ISex,
      password: formElements.pswd.value,
      passwordRepeat: formElements.repeatPswd.value,
    })
  }

  return (
    <>
      <div className='main'>
        <input type='checkbox' id='chk' aria-hidden='true' />

        <div className='signup'>
          <form onSubmit={submitSignUpForm}>
            <label htmlFor='chk' aria-hidden='true'>
              Регистрация
            </label>

            <Input name='userName' placeholder='Name' />
            <Input type='text' name='nickName' placeholder='Nick' />
            <Input type='email' name='email' placeholder='Email' label='Почта' withAsterisk />

            <div className='radio-wrapper'>
              <div>
                <input type='radio' id='male' name='sex' value='male' />
                <label className='radio-label' htmlFor='male'>
                  мальчик
                </label>
              </div>
              <div>
                <input type='radio' id='female' name='sex' value='female' />
                <label className='radio-label' htmlFor='female'>
                  девочка
                </label>
              </div>
            </div>

            <Input type='password' name='pswd' placeholder='Password' label='Пароль' withAsterisk />
            <Input type='password' name='repeatPswd' placeholder='Reapet password' />
            <button>Зарегистрироваться</button>
          </form>
        </div>

        <div className='login'>
          <form onSubmit={submitLoginForm}>
            <label htmlFor='chk' aria-hidden='true'>
              Вход
            </label>
            <Input type='email' name='email' placeholder='Email' />
            <Input type='password' name='pswd' placeholder='Password' />
            <button>Войти</button>
          </form>
        </div>
      </div>
    </>
  )
}
