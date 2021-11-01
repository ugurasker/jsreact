import React from 'react'
import {useState} from "react";

function HookOrnek() {
  //  const [isim,setIsim] = useState("Can");
  //  const [meslek,setMeslek]=useState("developer");
  //  const [yas,setYas]=useState("23");
 // const degistir = function () {
  //  setIsim("Ahmet");
  //  setMeslek("Grafiker");
  //  setYas(44);  }

    const [kisi,setKisi]=useState({
        isim: "Can",
        meslek:"developer",
        yas:"23",
    })
    const degistir = () => {
        setKisi({
            isim: "Ahmet",
            meslek:"grafiker",
            yas:"44",
        })
    }

  

    return (
        <div className="container text-center">
      {/* <h1>{isim}</h1>
        <h2>{meslek}</h2>
        <h2>{yas}</h2> */ }
        <h1>{kisi.isim}</h1>
        <h2>{kisi.meslek}</h2>
        <h2>{kisi.yas}</h2>

            <button className="btn btn-outline-info" onClick={degistir}>degistir</button>
        </div>
    )
}

export default HookOrnek

