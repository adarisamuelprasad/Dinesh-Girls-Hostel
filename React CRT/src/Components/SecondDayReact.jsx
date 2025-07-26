import React from 'react';
import App from '../App';

function Repeated({name, rno}){
    console.log("Name:"+name+ "Roll No:"+rno);
    return(
        <div>
            <h1>Name:{name}</h1>
            <h2>Roll No:{rno}</h2>
        </div>
    )
}
export default Repeated;