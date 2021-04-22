import { createGlobalStyle } from 'styled-components';
/* Creamos un entorno global de estilos, muy parecido a bootstrap */
export const GlobalStyle = createGlobalStyle`

/*------ Fonts ------*/
@import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');




/*------ Styles------*/
:root {
  --color-bg: #252E48;
  /*--color-bg: -webkit-linear-gradient(180deg, rgba(0,25,26,1) 40%, rgba(17,82,66,1) 81%, rgba(48,190,140,1) 100%);*/
  --color-text1: #9AA3A3;
  --color-text2: #D8E9E9;
  --color-text3: #252E48;
  --color-text4: #6B6B6B;
  --colorblur: rgba(37,46,72,0.69);
  --color-bg-white: #F2F2F2;
  --color-bg-1: #00191A;
  --color-bg-2: #30BE8C;
  --color-primary: #30BE8C;
  --color-hover: rgba(54, 178, 188, 0.34);

  --color-note1: #F5F3C0;
  --color-note2: #F5C0D7;
  --color-note3: #C0F5C9;
  --color-note4: #D5F09B;

  --font1: 'Roboto', sans-serif;
  --font2: 'Roboto Condensed', sans-serif;
  --font3: 'Roboto Mono', monospace;

  --border-radius: 4px;

  --icon-width: 3rem;
}

/*------TAG Styles------*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 62.5%; /* 1rem = 10px */
  background-color: var(--color-bg);
  font-family: var(--font1);
  color: var(--color-text2);
}
h1 {
  font-size: 3.6rem;
  margin-bottom: .7em;
  color: var(--color-text1);
}
h2 {
  font-size: 3rem;
  margin-bottom: .7em;
  color: var(--color-text2);
}
h3 {
  font-size: 2.4rem;
  margin-bottom: .7em;
  color: var(--color-text1);
}
h4 {
  font-size: 2rem;
  margin-bottom: .7em;
  color: var(--color-text1);
}
h5 {
  font-size: 1.7rem;
  padding: 2rem 0;
  color: var(--color-text2);
}
p {
  font-size: 1.8rem;
  font-family: var(--font1);
  line-height : 100%;
  margin-bottom: 2.2rem;
  text-overflow: ellipsis; 
  color: var(--color-text1);
}
small {
  font-size: 1.4rem;
}
b {
  color: var(--color-primary);
  font-weight: normal;
}
a {
  text-decoration: none;
}
button {
  background: transparent;
  padding: 1.4rem 3rem;
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-primary);
  cursor: pointer;
  font-family: var(--font3);
  outline: none;
}
button:hover {
  background: var(--color-hover);
}
button:active {
  color: var(---color-text2)
}
img {
  width: 100%;
}


.flex-center{
  display: flex;
  justify-content:center;
}

`