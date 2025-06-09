import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../theme-provider';
import { ThemeToggle } from '../theme-toggle';

describe('ThemeToggle', () => {
  test('switches between sun and moon icons on click', async () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(document.querySelector('.lucide-moon')).toBeInTheDocument();
    expect(document.querySelector('.lucide-sun')).not.toBeInTheDocument();

    await userEvent.click(button);
    await waitFor(() => expect(document.querySelector('.lucide-sun')).toBeInTheDocument());
    expect(document.querySelector('.lucide-moon')).not.toBeInTheDocument();

    await userEvent.click(button);
    await waitFor(() => expect(document.querySelector('.lucide-moon')).toBeInTheDocument());
    expect(document.querySelector('.lucide-sun')).not.toBeInTheDocument();
  });
});
