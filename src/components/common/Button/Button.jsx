import { S } from "./ButtonStyle";

export default function Button({ children, theme }) {
  return <S.Button theme={theme}>{children}</S.Button>;
}
