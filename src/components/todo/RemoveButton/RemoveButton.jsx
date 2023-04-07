import { BsFillTrash3Fill } from "react-icons/bs";
import { S } from ".//RemoveButtonStyle";

export default function RemoveButton({ onClick }) {
  return (
    <S.Button onClick={onClick}>
      <BsFillTrash3Fill />
    </S.Button>
  );
}
