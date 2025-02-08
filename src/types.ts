export type ISignupFormResult = {
  name: string
  nick: string
  email: string
  sex: ISex
  password: string
  passwordRepeat: string
}

export type ILoginFormResult = { email: string; password: string }

interface ILoginFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  pswd: HTMLInputElement
}

export interface ILoginFormEvent extends HTMLFormElement {
  readonly elements: ILoginFormElements
}

interface ISignUpFormElements extends HTMLFormControlsCollection {
  userName: HTMLInputElement
  nickName: HTMLInputElement
  email: HTMLInputElement
  sex: RadioNodeList
  pswd: HTMLInputElement
  repeatPswd: HTMLInputElement
}

export interface ISignUpFormEvent extends HTMLFormElement {
  readonly elements: ISignUpFormElements
}

export type ISex = 'male' | 'female'
