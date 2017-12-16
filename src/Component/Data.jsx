import React from 'react';
import Tr from './Tr';

//--  Sector Datos  -->
const Data = ({data}) => {
  if(data !== undefined){
    return (
      <div className="left">
        <h1 key="Title" id={"Title"}>{data.title}</h1>
        <h5 key="Genders" id={"Genders"}>
          { data.genres === undefined ? "":
            data.genres.map((e) =>{
              return (<span key={"Genders_"+e.id} >{e.name}</span>);
            })
          }
        </h5>
        <p key="Description" id={"Description"}>{data.overview}</p>
        <table key="Date" id={"Date"}>
          <tbody>
            <Tr name={"Titule"}           value={ data.title} />
            <Tr name={"Titulo Original"}  value={ data.original_title} />
            <Tr name={"Productoras"}      value={ data.production_companies === undefined ? "":
              data.production_companies.map((e) =>{ 
                return (<span key={"production_companies_"+e.id}>{e.name}</span>) 
              })
            }/>
            <Tr name={"Fecha de estreno"}  value={ data.release_date} />
            <Tr name={"Popularidad"}      value={ data.popularity} />
            <Tr name={"Idioma original"}  value={ data.original_language} />
            <Tr name={"Puntuacion"}       value={ data.vote_average} />
            <Tr name={"Publico"}          value={ data.adult?"+18":"Familia"} />
          </tbody>
        </table>
        <div>
          <span id={"Link"} className="material-icons">play_arrow</span>
          <a href="#Tool_box" id={"Comentari"} className="material-icons">forum</a>
        </div>
      </div>
    )
  }else 
    return (<p></p>)

} 
export default Data;

/**

      <div className="left">
        <h1 id={"Title"}>{data.original_title}</h1>
        <h5 id={"Genders"}>
          { data.genres === undefined ? "":
            data.genres.map((e) =>{
              return (<span>{e.name}</span>);
            })
          }
        </h5>
        <p id={"Description"}>{data.overview}</p>
        <table key={"Date"} id={"Date"}>
          <tbody>
            <Tr name={"Titule"}           value={ data.title} />
            <Tr name={"Puntuacion"}       value={ data.vote_average} />
            <Tr name={"Idioma original"}  value={ data.original_language} />
            <Tr name={"Productoras"}      value={ data.production_companies === undefined ? "":
              data.production_companies.map((e) =>{ 
                return (<span>{e.name}</span>) 
              })
            }/>
            <Tr name={"Publico"}          value={ data.adult?"+18":"Familia"} />
            <Tr name={"Popularidad"}      value={ data.popularity} />
            <Tr name={"Titulo Original"}  value={ data.original_title} />
            <Tr name={"Titulo Original"}  value={ data.release_date} />
          </tbody>
        </table>
        <div>
          <span id={"Link"} className="material-icons">play_arrow</span>
          <a href="#Tool_box" id={"Comentari"} className="material-icons">forum</a>
        </div>
      </div>


 */