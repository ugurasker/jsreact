import React from 'react';
import {useEffect,useState} from "react";

//useEffect hooku side effectleri yonetmek icin kullanilir.
//!- Class komponentlerindeki componentDidMount(), componentDidUnMount(),
//!  componentDidUpdate() gibi yaşamdöngüsü (lifecycle) metodlarinin
//!  yaptigi isi yapar
//! - Bu ozellikleri sayesinde genelde uygulama dis dunyadan (veritabani, api)
//!   veri cekerken kullanimi yaygindir.

function UseEffect01() {

    const [sayac,setSayac] = useState(0);
  //useeffect default olarak her renderda calistirilir.  
    useEffect (()=>{
    

    })
// component her guncellendiginde calisir.

    useEffect (()=> {



    },[sayac])
//sadece ilk updatede calisir.
    useEffect (()=>{



    },[])
//sadece component kaldirildiginda calisir.
    useEffect (()=> {
        return ()=> {
            console.log("cleanup fonksiyonus")
        };
    },[])
    
    function arttir () {

        setSayac (sayac+1);
    }
    return (
        <div>
            <h1>{sayac}</h1>
            <button onClick={arttir}>Arttir</button>
        </div>
    )
}

export default UseEffect01
