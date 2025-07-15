import React, { useState, Suspense } from "react";
import Input from "remote_app/Input";
import RemoteButton from "remote_app/Button";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth"; 

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const navigate = useNavigate();

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const newErrors: Partial<typeof form> = {};

  if (!form.name) newErrors.name = "Please enter your name";
  if (!form.email) newErrors.email = "Please enter your email";
  if (!form.password) newErrors.password = "Please enter a password";
  if (form.password !== form.confirmPassword)
    newErrors.confirmPassword = "Passwords do not match";

  if (Object.keys(newErrors).length === 0) {
    try {
      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      alert("Registration successful!");
      navigate("/login"); // ✅ redirect ไปหน้า login
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error(error);
    }
  } else {
    setErrors(newErrors);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-32 p-6 bg-base-200 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">Register</h2>

      <Input
        label="Name"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        placeholder="John Doe"
      />

      <Input
        label="Email"
        type="email"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
        placeholder="example@mail.com"
      />

      <Input
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) => handleChange("password", e.target.value)}
        error={errors.password}
      />

      <Input
        label="Confirm Password"
        type="password"
        value={form.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        error={errors.confirmPassword}
      />

      <Suspense fallback={<div className="skeleton w-full h-12 mt-4" />}>
        <RemoteButton
          text="Register"
          type="submit"
          className="w-full mt-4"
        />
      </Suspense>
    </form>
  );
};

export default RegisterPage;
