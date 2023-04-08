import { BsPencilFill } from "react-icons/bs";
import { S } from "./ModifyButtonStyle";

export default function ModifyButton({ onclick }) {
  return (
    <S.Button onClick={onclick} data-testid="modify-button">
      <BsPencilFill />
    </S.Button>
  );
}
