import { useForm, SubmitHandler } from 'react-hook-form';
import { Typography, TextField, Button, styled } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './login-schema';
import { useLoginMutation } from './use-login-mutations';
import { Inputs } from './login-page.interfaces';
import { StyledLoadder } from '../../components/loader';

export const LoginPage = () => {

    const mutation = useLoginMutation()

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
    return (
        <>
        <Typography component="h1">Login</Typography>

        {mutation.isLoading && (<StyledLoadder role="progressbar" aria-label="loading" />)}

        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Email" {...register(('email'), {required: true })} helperText={errors.email?.message}></TextField>
        <TextField label="Password" type="password" {...register(('password'), {required: true })} helperText={errors.password?.message} />
        <Button disabled={mutation.isLoading} type="submit">Submit</Button>
        </form>
    </>
    )
}