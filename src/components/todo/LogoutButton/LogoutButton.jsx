import { FiLogOut } from "react-icons/fi";
import { S } from "./LogoutButtonStyle";

export default function LogoutButton({ onClick }) {
  return (
    <S.Button onClick={onClick}>
      <FiLogOut />
    </S.Button>
  );
}
