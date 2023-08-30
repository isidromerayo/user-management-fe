import { Typography, TextField, Button } from '@mui/material'

export const LoginPage = () => {

    return (
        <>
        <Typography component="h1">Login</Typography>
        <TextField label="Email"></TextField>
        <TextField label="Password" type="password"/>
        <Button>Submit</Button>
    </>
    )
}