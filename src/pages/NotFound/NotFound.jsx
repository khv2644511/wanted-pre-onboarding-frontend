import React from "react";
import { S } from "./NotFoundStyle";

export default function NotFound() {
  return (
    <main>
      <h1 className="ir-hidden">찾을 수 없는 페이지</h1>
      <S.Container>
        <S.Title>Not Found</S.Title>
      </S.Container>
    </main>
  );
}
