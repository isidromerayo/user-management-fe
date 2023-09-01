import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginPage } from '../../../pages/login-page/login-page';
import { renderWithProviders } from '../../../mocks/render-with-providers';

const getSubmitBtn = () => screen.getByRole('button', {name: /submit/i})

describe('Login page', () => {
   
    it('should be render login title', () => {
        renderWithProviders(<LoginPage/>)
        
        expect(screen.getByRole('heading', {name: /login/i} )).toBeInTheDocument()
    });

    it('should render the form elements', () => {
        renderWithProviders(<LoginPage/>)
        
        expect(screen.getByLabelText(/email/i) ).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i) ).toBeInTheDocument()
        expect(getSubmitBtn()).toBeInTheDocument()
    });

    it('should validate the inputs as required', async () => {
        renderWithProviders(<LoginPage/>)
        
        // submit form
        userEvent.click(getSubmitBtn())

        // expect validation errros
        expect(await screen.findByText(/The email is required/i)).toBeInTheDocument()
        expect(await screen.findByText(/The password is required/i)).toBeInTheDocument()
    });

    it('should validate the email format', async () => {
        renderWithProviders(<LoginPage/>)
        
        userEvent.type(screen.getByLabelText(/email/i),'invalid email')
        userEvent.click(getSubmitBtn())

        expect(await screen.findByText(/The email is not valid/i)).toBeInTheDocument()
        
    });
    xit('should disable the submit button while is fetching', async () => {
        renderWithProviders(<LoginPage/>)
        
        expect(getSubmitBtn()).not.toBeDisabled()

        await userEvent.type(screen.getByLabelText(/email/i),'a@example.com')
        await userEvent.type(screen.getByLabelText(/password/i),'123456')
        
        await userEvent.click(getSubmitBtn())

        await waitFor(() => expect(getSubmitBtn()).toBeDisabled())
    });
});