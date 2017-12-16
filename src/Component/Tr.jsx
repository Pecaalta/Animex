import React from 'react';

const Tr = ({name,value}) => {
  if (name !== undefined && value !== undefined ) 
    return (
        <tr>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    )
  else 
    return (<tr></tr>)
};

export default Tr;