import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  :root {
    font-family: "Pretendard";
    font-size: 62.5%;
    --linkbrary-primary: #6d6afe;
    --linkbrary-red: #ff5b56;
    --linkbrary-black: #111322;
    --linkbrary-white: #ffffff;
    --linkbrary-dark-slate-gray: #3e3e43;
    --linkbrary-blue-gray: #9fa6b2;
    --linkbrary-light-blue-gray: #ccd5e3;
    --linkbrary-alice-blue: #e7effb;
    --linkbrary-white-smoke: #f0f6ff;
    --button-white: #f5f5f5;
    --button-sky-blue: #6ae3fe;
  }
  
  body {
    font-size: 1.6rem;
    margin:0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    text-align: center;
  }
`;

export default GlobalStyle;
