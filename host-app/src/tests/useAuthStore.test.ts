import { act } from '@testing-library/react';
import useAuthStore from '../stores/useAuthStore';

describe('useAuthStore', () => {
  beforeEach(() => {
    // เคลียร์ localStorage ก่อนทุกเทสต์
    localStorage.clear();
  });

  it('should have initial user as null', () => {
    // ตรวจสอบว่า user เริ่มต้นเป็น null หรือไม่ (ยังไม่มีการล็อกอิน)
    const user = useAuthStore.getState().user;
    expect(user).toBeNull();
  });

  it('should set user correctly', () => {
    // ทดสอบการตั้งค่า user ใหม่ด้วย setUser
    const testUser = { name: 'John', email: 'john@example.com', token: 'abc123' };

    act(() => {
      // เรียก setUser เพื่อเปลี่ยนสถานะ user ใน store
      useAuthStore.getState().setUser(testUser);
    });

    // ตรวจสอบว่า user ถูกตั้งค่าอย่างถูกต้อง
    expect(useAuthStore.getState().user).toEqual(testUser);
  });

  it('should logout user (set user to null)', () => {
    // ทดสอบการออกจากระบบ (logout) โดยการตั้งค่า user เป็น null
    const testUser = { name: 'John', email: 'john@example.com', token: 'abc123' };

    act(() => {
      useAuthStore.getState().setUser(testUser);
      useAuthStore.getState().logout();
    });

    // ตรวจสอบว่า user ถูกตั้งค่าเป็น null หลังจาก logout
    expect(useAuthStore.getState().user).toBeNull();
  });

  it('should persist user data to localStorage', () => {

    // ทดสอบว่าข้อมูล user ถูกเก็บใน localStorage หลังจากเรียก setUser
    const testUser = { name: 'John', email: 'john@example.com', token: 'abc123' };

    act(() => {
      useAuthStore.getState().setUser(testUser);
    });
    
    // ดึงข้อมูลที่เก็บใน localStorage ออกมา
    const stored = localStorage.getItem('auth-storage');
    expect(stored).not.toBeNull();

    // แปลงข้อมูลจาก JSON แล้วตรวจสอบข้อมูล user
    const parsed = stored && JSON.parse(stored);
    expect(parsed.state.user).toEqual(testUser);
  });
});
