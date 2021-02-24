import { createGlobalStyle } from 'styled-components';
/* Creamos un entorno global de estilos, muy parecido a bootstrap */
export const GlobalStyle = createGlobalStyle`

/*------ Styles------*/
:root {
  --color-bg: #252E48;
  --color-text1: #9AA3A3;
  --color-text2: #D8E9E9;
  --colorblur: rgba(37,46,72,0.69);
  --color-bg-white: #F2F2F2;
  --color-primary: #36B2BC;
  --color-hover: rgba(54, 178, 188, 0.34);

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
  min-width: 350px;
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
  line-height : 2.3rem;
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
}
button:hover {
  background: var(--color-hover);
}
img {
  width: 100%;
}

.flex-center{
  display: flex;
  justify-content:center;
}

`