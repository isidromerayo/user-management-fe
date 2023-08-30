import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginPage } from '../../../pages/login-page/login-page';

const getSubmitBtn = () => screen.getByRole('button', {name: /submit/i})

describe('Login page', () => {
   
    it('should be render login title', () => {
        render(<LoginPage/>)
        
        expect(screen.getByRole('heading', {name: /login/i} )).toBeInTheDocument()
    });

    it('should render the form elements', () => {
        render(<LoginPage/>)
        
        expect(screen.getByLabelText(/email/i) ).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i) ).toBeInTheDocument()
        expect(getSubmitBtn()).toBeInTheDocument()
    });

    it('should validate the inputs as required', async () => {
        render(<LoginPage/>)
        
        // submit form
        userEvent.click(getSubmitBtn())

        // expect validation errros
        expect(await screen.findByText(/The email is required/i)).toBeInTheDocument()
        expect(await screen.findByText(/The password is required/i)).toBeInTheDocument()
    });

    it('should validate the email format', async () => {
        render(<LoginPage/>)
        
        userEvent.type(screen.getByLabelText(/email/i),'invalid email')
        userEvent.click(getSubmitBtn())

        expect(await screen.findByText(/The email is not valid/i)).toBeInTheDocument()
        
    });
});