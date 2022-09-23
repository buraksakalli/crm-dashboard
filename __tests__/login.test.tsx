import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/login';

describe('LoginPage', () => {
  it('renders a heading', () => {
    render(<LoginPage />);

    const heading = screen.getByRole('heading', {
      name: 'Sign in',
    });

    expect(heading).toBeInTheDocument();
  });
});
