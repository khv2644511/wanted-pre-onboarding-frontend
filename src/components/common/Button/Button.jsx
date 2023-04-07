import { S } from "./ButtonStyle";

export default function Button({
  children,
  bgcolor,
  disabled,
  txtcolor,
  ...rest
}) {
  return (
    <S.Button
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      disabled={disabled}
      {...rest}
    >
      {children}
    </S.Button>
  );
}
