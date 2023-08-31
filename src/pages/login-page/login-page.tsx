import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Typography, TextField, Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './login-schema';
import axios from 'axios';

interface Inputs {
    email: string,
    password: string,
};

const loginService = async (email: string, password: string) => {
    const response = await axios.post('/login', {
        email,
        password
    })
}

export const LoginPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<Inputs>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
        setIsLoading(true)
        await loginService(email, password)
    }

    return (
        <>
        <Typography component="h1">Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Email" {...register(('email'), {required: true })} helperText={errors.email?.message}></TextField>
        <TextField label="Password" type="password" {...register(('password'), {required: true })} helperText={errors.password?.message} />
        <Button disabled={isLoading} type="submit">Submit</Button>
        </form>
    </>
    )
}