import { S } from "./ButtonStyle";

export default function Button({ children, bgcolor, disabled, txtcolor }) {
  console.log(bgcolor);

  return (
    <S.Button bgcolor={bgcolor} txtcolor={txtcolor} disabled={disabled}>
      {children}
    </S.Button>
  );
}
