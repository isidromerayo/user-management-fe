import { Typography, TextField, Button } from '@mui/material'
import { FormEvent, useState } from 'react'

export const LoginPage = () => {

    const [emailErrorMsg, setEmailErrorMsg] = useState('')
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        const formElement = event.currentTarget

        const formElements = formElement.elements as typeof formElement.elements & {
            email: {value: string},
            password: { value: string}
        }
        
        const {email, password} = formElements
        if (!email.value) {
            setEmailErrorMsg('The email is required')
        }
        if (!password.value) {
            setPasswordErrorMsg('The password is required')
        }
    }

    return (
        <>
        <Typography component="h1">Login</Typography>
        <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" helperText={emailErrorMsg}></TextField>
        <TextField label="Password" type="password" name="password" helperText={passwordErrorMsg}/>
        <Button type="submit">Submit</Button>
        </form>
    </>
    )
}