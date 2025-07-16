import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../components/Input';

describe('Input', () => {
  const mockProps = {
    label: 'Username',
    value: '',
    onChange: jest.fn(),
    placeholder: 'Enter your username',
  };

  // ทดสอบว่าแสดง label และ placeholder ได้ถูกต้อง
  it('renders label and placeholder correctly', () => {
    render(<Input {...mockProps} />);

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
  });

  // ทดสอบว่าเมื่อพิมพ์ใน input จะเรียก onChange
  it('calls onChange when typing', () => {
    const handleChange = jest.fn();

    render(
      <Input
        {...mockProps}
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText('Enter your username');
    fireEvent.change(input, { target: { value: 'newuser' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // ทดสอบว่ามี error message แสดงเมื่อส่ง error มา
  it('displays error message when error prop is provided', () => {
    render(
      <Input
        {...mockProps}
        error="Username is required"
      />
    );

    expect(screen.getByText('Username is required')).toBeInTheDocument();
  });
});
