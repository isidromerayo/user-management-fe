import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Typography, TextField, Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './login-schema';
import axios from 'axios';
import { useMutation } from 'react-query';

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

    const mutation = useMutation(
        ({email, password}:Inputs) => 
            loginService(email, password)
        )

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<Inputs>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
        mutation.mutate({email, password})
    }
    console.log(mutation.isLoading)
    return (
        <>
        <Typography component="h1">Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Email" {...register(('email'), {required: true })} helperText={errors.email?.message}></TextField>
        <TextField label="Password" type="password" {...register(('password'), {required: true })} helperText={errors.password?.message} />
        <Button disabled={mutation.isLoading} type="submit">Submit</Button>
        </form>
    </>
    )
}