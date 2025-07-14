import React, { useState, useEffect } from "react";
import useAuthStore from "../stores/useAuthStore";
import Button from "remote_app/Button";
import { useNavigate, useLocation } from "react-router-dom";

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const location = useLocation();

  useEffect(() => {
    if (location.state?.updated) {
      alert("Profile updated successfully");
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setUser({
      ...user!,
      name: name.trim(),
      email: email.trim(),
      token: user!.token,
    });
    navigate("/profile", { state: { updated: true } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="max-w-md w-full p-6 bg-base-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`input input-bordered w-full ${
                errors.name ? "input-error" : ""
              }`}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <Button text="Save Changes" type="submit" className="btn-primary" />
            <Button
              text="Cancel"
              onClick={() => navigate("/profile")}
              className="btn-outline"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditProfilePage;
