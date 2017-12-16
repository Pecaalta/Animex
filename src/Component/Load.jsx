import React from 'react';

//-- section -->
const Load = ({Title,active}) => (
  //--  Sector Cargar  -->
  <section id={"Inicio"} className={active}>
    <h1>{Title}</h1>  
    <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
      <circle id="loading-inner" cx="75" cy="75" r="60"/>
    </svg>
  </section>
);
export default Load;