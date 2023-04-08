import { BsPencilFill } from "react-icons/bs";
import { S } from "./ModifyButtonStyle";

export default function ModifyButton({ onclick }) {
  return (
    <S.Button onClick={onclick}>
      <BsPencilFill />
    </S.Button>
  );
}
