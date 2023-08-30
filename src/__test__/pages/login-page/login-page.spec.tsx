import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginPage } from '../../../pages/login-page/login-page';

describe('Login page', () => {
   
    it('should be render login title', () => {
        render(<LoginPage/>)
        
        expect(screen.getByRole('heading', {name: /login/i} )).toBeInTheDocument()
    });
    it('should render the form elements', () => {
        render(<LoginPage/>)
        
        expect(screen.getByLabelText(/email/i) ).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i) ).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /submit/i}) ).toBeInTheDocument()
    });

    it('should validate the inputs as required', async () => {
        render(<LoginPage/>)
        
        // submit form
        userEvent.click(screen.getByRole('button', {name: /submit/i}))

        // expect validation errros
        expect(await screen.findByText(/The email is required/i)).toBeInTheDocument()
        expect(await screen.findByText(/The password is required/i)).toBeInTheDocument()
    });
});