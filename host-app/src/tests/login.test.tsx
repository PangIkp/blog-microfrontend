import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import LoginPage from "../pages/login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const server = setupServer(
  http.post("http://localhost:4001/auth/login", () => {
    return HttpResponse.json({ token: "mocked-token" });
  }),
  http.get("http://localhost:4001/auth/profile", () => {
    return HttpResponse.json({ name: "Mock User", email: "mock@mail.com" });
  })
);

// เรียกใช้ mock server ก่อนทั้งหมด
beforeAll(() => server.listen());

// รีเซต handler หลังจากแต่ละ test (กันไม่ให้ test อื่นโดน side-effect)
afterEach(() => server.resetHandlers());

// ปิด server หลังจากจบทั้งหมด
afterAll(() => server.close());

// สร้าง QueryClient สำหรับใช้กับ React Query
const queryClient = new QueryClient();

// === TEST CASE ===
test("calls API and shows success", async () => {
  // Mock window.alert เพื่อให้ Jest ตรวจสอบการเรียกใช้งานได้ (ป้องกัน error จาก jsdom)
  window.alert = jest.fn();

  // เรนเดอร์ LoginPage พร้อมห่อด้วย QueryClientProvider และ BrowserRouter
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </QueryClientProvider>
  );

  // เปลี่ยนค่า input email
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "test@mail.com" },
  });

  // เปลี่ยนค่า input password
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "123456" },
  });

  // คลิกปุ่ม login
  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  // รอจนกระทั่ง alert ถูกเรียกแสดงว่า login สำเร็จ
  await waitFor(() =>
    expect(window.alert).toHaveBeenCalledWith("Login successful")
  );
});
