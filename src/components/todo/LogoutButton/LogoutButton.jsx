import { useCallback } from "react";
import { FiLogOut } from "react-icons/fi";
import { S } from "./LogoutButtonStyle";

export default function LogoutButton({ onClick }) {
  const handleLogout = useCallback(() => {
    localStorage.removeItem("access_token");
    window.location.href = "/signin";
  }, []);

  return (
    <S.Button onClick={handleLogout}>
      <FiLogOut />
    </S.Button>
  );
}
