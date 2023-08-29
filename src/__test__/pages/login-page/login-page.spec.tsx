import { screen, render } from '@testing-library/react';
import { LoginPage } from '../../../pages/login-page/login-page';


describe('Login page', () => {
   
    it('should behave...', () => {
        render(<LoginPage/>)
        
        expect(screen.getByRole('heading', {name: /login/i} )).toBeInTheDocument()

    });
});