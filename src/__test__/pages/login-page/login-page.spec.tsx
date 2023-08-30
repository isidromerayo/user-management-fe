import { screen, render } from '@testing-library/react';
import { LoginPage } from '../../../pages/login-page/login-page';


describe('Login page', () => {
   
    it('should be render login title', () => {
        render(<LoginPage/>)
        
        expect(screen.getByRole('heading', {name: /login/i} )).toBeInTheDocument()
    });
    it('should render the form elements', () => {
        render(<LoginPage/>)
        
        expect(screen.getByLabelText(/email/i) ).toBeInTheDocument()
    });
});