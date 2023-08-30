import { useForm, SubmitHandler } from 'react-hook-form';
import { Typography, TextField, Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const loginSchema = yup.object({
    email: yup.string().required('The email is required'),
    password: yup.string().required('The password is required'),
  }).required();

interface Inputs {
    email: string,
    password: string,
};

export const LoginPage = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<Inputs>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <>
        <Typography component="h1">Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Email" {...register(('email'), {required: true })} helperText={errors.email?.message}></TextField>
        <TextField label="Password" type="password" {...register(('password'), {required: true })} helperText={errors.password?.message} />
        <Button type="submit">Submit</Button>
        </form>
    </>
    )
}