import { useForm, SubmitHandler } from 'react-hook-form';
import { Typography, TextField, Button } from '@mui/material'

interface Inputs {
    email: string,
    password: string,
};

export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <>
        <Typography component="h1">Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Email" {...register(('email'), {required: true })} helperText={errors.email && 'The email is required'}></TextField>
        <TextField label="Password" type="password" {...register(('password'), {required: true })} helperText={errors.password && 'The password is required'}/>
        <Button type="submit">Submit</Button>
        </form>
    </>
    )
}