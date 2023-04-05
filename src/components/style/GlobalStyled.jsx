import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing : border-box;
  font-family: inherit;
}

@font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap') format('woff2');
    font-weight: 400;
    font-style: normal;
}

.ir-hidden{
   position: absolute;
   clip: rect(0 0 0 0);
   width: 1px;
   height: 1px;
   margin: -1px;
   overflow: hidden;
}
:root{
    --bg-color:#f3ebf6;
    --accent-color:#d63df0;
    --color-type-01:#8b55aa;
    --color-type-02:#fafafa;
    --color-type-03:#c2c2c2;
}

body{
   font-family: 'Spoqa Han Sans Neo', sans-serif;
   font-weight: 400;
   background-color: var(--bg-color);
   font-size: 12px;
}
`;

export default GlobalStyle;
