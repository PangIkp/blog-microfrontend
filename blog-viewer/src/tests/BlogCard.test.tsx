import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // เพิ่ม matcher เช่น toBeInTheDocument()
import BlogCard from '../components/BlogCard';
import { MemoryRouter, Link } from 'react-router-dom'; // ใช้ MemoryRouter จำลอง routing ใน test

describe('BlogCard', () => {
  // กำหนด props mock สำหรับ BlogCard
  const mockProps = {
    id: 1,
    title: 'Test Blog Title',
    excerpt: 'This is a short summary.',
    LinkComponent: Link, // ใช้ Link component ของ react-router-dom
  };

  // ทดสอบว่า BlogCard แสดง title และ excerpt ตามที่ส่งเข้ามาหรือไม่
  it('renders title and excerpt', () => {
    render(
      <MemoryRouter>
        <BlogCard {...mockProps} />
      </MemoryRouter>
    );

    // ตรวจสอบว่า title ปรากฏในหน้า
    expect(screen.getByText('Test Blog Title')).toBeInTheDocument();

    // ตรวจสอบว่า excerpt ปรากฏในหน้า
    expect(screen.getByText('This is a short summary.')).toBeInTheDocument();
  });

  // ทดสอบว่า BlogCard แสดงลิงก์ "Read More" และลิงก์นั้นชี้ไปที่ URL ที่ถูกต้อง
  it('renders Read More link with correct href', () => {
    render(
      <MemoryRouter>
        <BlogCard {...mockProps} />
      </MemoryRouter>
    );

    // หา element ที่เป็นลิงก์ตาม aria-label
    const link = screen.getByRole('link', { name: /read more about test blog title/i });

    // ตรวจสอบว่า href ของลิงก์ถูกต้องตาม id
    expect(link).toHaveAttribute('href', '/posts/1');
  });
});
