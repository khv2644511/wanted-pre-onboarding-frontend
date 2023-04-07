import { BsPencilFill } from "react-icons/bs";
import { S } from "./ModifyButtonStyle";

export default function ModifyButton({ onClick }) {
  return (
    <S.Button onClick={onClick}>
      <BsPencilFill />
    </S.Button>
  );
}
