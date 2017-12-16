import React from 'react';
import Tr from './Tr';

const Table = ({data}) => (
  <table key={"Date"} id={"Date"}>
    <tbody>
      <Tr name={"Titule"}           value={data.title} />
      <Tr name={"Puntuacion"}       value={data.vote_average} />
      <Tr name={"Idioma original"}  value={data.original_language} />
      <Tr name={"Productoras"}      value={ data.production_companies === undefined ? "":
        data.production_companies.map((e) =>{ 
          return (<span>{e.name}</span>) 
        })
      }/>
      <Tr name={"Publico"}          value={data.adult?"+18":"Familia"} />
      <Tr name={"Popularidad"}      value={data.popularity} />
      <Tr name={"Titulo Original"}  value={data.original_title} />
      <Tr name={"Titulo Original"}  value={data.release_date} />
    </tbody>
  </table>
);

export default Table;