import React from 'react';

//--  Sector Portada  -->
const Cover = ({src}) => (
  <div className="right">
    <img 
        id={"Portada"} 
        src={"https://image.tmdb.org/t/p/w500/"+src} 
        alt="cover"
    />
  </div>
);
export default Cover;