import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Button from "remote_app/Button"; // ใช้ปุ่ม remote ที่คุณมี
import useAuthStore from "../stores/useAuthStore";
import { useNavigate, Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  if (!user) {
    // กรณี user ยังไม่ล็อกอิน ให้ไปหน้า login
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto mt-24 p-8 bg-base-200 rounded-lg shadow-md">
      <div className="flex items-center space-x-6 mb-8">
        <FaUserCircle size={64} className="text-primary" />
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button
          text="Edit Profile"
          to="/profile/edit"
          LinkComponent={Link} 
          className="btn-error"
        />

        <Button
          text="Logout"
          onClick={handleLogout}
          className="btn-outline"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
