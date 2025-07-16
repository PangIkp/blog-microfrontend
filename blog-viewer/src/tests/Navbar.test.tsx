import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';
import { MemoryRouter, Link } from 'react-router-dom';

describe('Navbar', () => {
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
  };

  // ทดสอบแสดงเมนูทั้งหมดและ RetroBlog (ไม่มี user)
  it('renders all nav links and Login button when user is not logged in', () => {
    renderWithRouter(<Navbar LinkComponent={Link} user={null} />);

    expect(screen.getByText('RetroBlog')).toBeInTheDocument();
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Posts')).toHaveAttribute('href', '/posts');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact');
    expect(screen.getByText('Login')).toHaveAttribute('href', '/login');
  });

  // ทดสอบแสดงชื่อผู้ใช้และลิงก์ profile เมื่อมี user
  it('renders user name and profile link when user is logged in', () => {
    const mockUser = { name: 'Alice' };

    renderWithRouter(<Navbar LinkComponent={Link} user={mockUser} />);

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /alice/i })).toHaveAttribute('href', '/profile');
  });
});
