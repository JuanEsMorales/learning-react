import Input from './Input'
import Button from './Button'
import React from 'react'
import { useUserActions } from '../hooks/useUserActions'
export function CreateNewUser () {
  const { addUser } = useUserActions()
  const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
    const form = event.target
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string
    addUser({ name, email, github })
  }
  return (
    <form onSubmit={handleSubmit} action="">
      <Input name='name' label='Nombre' placeholder='Aquí el nombre' />
      <Input name='email' label='Email' placeholder='Aquí el email' />
      <Input name='github' label='Github' placeholder='Aquí el nombre de usuario en github' />
      <Button />
    </form>
  )
}