import React, { useState, Suspense } from "react";
import Input from "remote_app/Input";
import RemoteButton from "remote_app/Button";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      alert("Login successful");
    },
    onError: () => {
      alert("Login failed");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "กรุณาใส่อีเมล";
    if (!password) newErrors.password = "กรุณาใส่รหัสผ่าน";

    if (Object.keys(newErrors).length === 0) {
      mutation.mutate({ email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-40 p-6 bg-base-200 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">Login</h2>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        error={errors.email}
        placeholder="example@mail.com"
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <Suspense fallback={<div className="w-full h-12 mt-4" />}>
        <RemoteButton text="Login" className="w-full mt-4" type="submit" />
      </Suspense>
    </form>
  );
};

export default LoginPage;
