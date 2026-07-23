import React from "react";
import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
overflow: hide;
}

body {
font-family: 'Poppins', sans-serif;
}

.container {
display: flex;
justify-content: center;
align-items: center;
min-height: calc(100vh - 120px);
padding: 20px; 
}

.form-container {
width: 600px;
height: 800px;
border-radius: 8px;
padding: 20px;
  /* Cor azul clara translúcida */
  background: rgba(173, 216, 230, 0.3); /* azul claro com transparência */

  /* Efeito vidro */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* compatibilidade Safari */

  /* Borda suave */
  border: 1px solid rgba(255, 255, 255, 0.4);

  /* Sombra leve para destacar */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
`;

export default EstilosGlobais;
