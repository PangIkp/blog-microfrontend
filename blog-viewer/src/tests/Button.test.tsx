import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';
import { MemoryRouter, Link } from 'react-router-dom';

describe('Button', () => {
  // กรณี 1: ปุ่มปกติ (ไม่มี `to`) => render <button>
  it('renders a normal button with text', () => {
    render(<Button text="Click Me" />);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button.tagName.toLowerCase()).toBe('button');
  });

  // กรณี 2: มี `to` และใช้ LinkComponent => render <Link> (หรือ <a>)
  it('renders a link when to and LinkComponent are provided', () => {
    render(
      <MemoryRouter>
        <Button text="Go to page" to="/test" LinkComponent={Link} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /go to page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  // กรณี 3: คลิกปุ่มแล้วเรียก onClick ได้
  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn(); // หรือ jest.fn() ถ้าใช้ Jest

    render(<Button text="Click Me" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
