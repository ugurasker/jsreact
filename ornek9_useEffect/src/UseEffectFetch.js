import React from 'react'
import {useState, useEffect } from "react";

function UseEffectFetch() {
    const [ulkeler,setUlkeler] = useState ([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => setUlkeler(data))
        //.catch((err)=>console.log(err));
       
    }, [])
       
    return ( <div className="text-center">
         <h1>ULKE BILGILERI</h1>
      {ulkeler.map((k)=> {
          const {name,capital,flag,id} =k;
          return (
              <div key={id}>
                 <img src={flag} alt=""width="30%" />
                  <h2>{name}</h2>
                  <p> {capital}</p>
              </div>
          )
      })}
           
        </div>
    )
}

export default UseEffectFetch
