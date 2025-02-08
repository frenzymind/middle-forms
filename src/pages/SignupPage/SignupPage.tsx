import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FormEvent } from 'react'
import { ISex, ISignUpFormEvent, ISignupFormResult } from '../../types'
import { Input } from '../../ui/Input/Input'

type ISignupPageProps = {
  onSubmit: (formResult: ISignupFormResult) => void
}

export function SignupPage({ onSubmit }: ISignupPageProps) {
  const submitSignUpForm = (event: FormEvent<ISignUpFormEvent>) => {
    event.preventDefault()

    const formElements = event.currentTarget.elements

    onSubmit({
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
        <div className='form'>
          <form onSubmit={submitSignUpForm}>
            <label aria-hidden='true'>Регистрация</label>

            <Input name='userName' placeholder='Name' />
            <Input type='text' name='nickName' placeholder='Nick' />
            <Input type='email' name='email' placeholder='Email' label='Почта' withAsterisk icon={faAt} />

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

            <Input
              type='password'
              name='pswd'
              placeholder='Password'
              label='Пароль'
              withAsterisk
              description='придумывайте сложный пароль'
            />
            <Input type='password' name='repeatPswd' placeholder='Reapet password' />
            <button>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </>
  )
}
