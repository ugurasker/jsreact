import {useState,useEffect} from "react";
import baby from "./baby.jpg";

function App() {
  const Hesapla = () => {
    const difference = +new Date(`2021-08-11`) - +new Date();
    let kalan = { days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference/ 1000) % 60),
   }
   return kalan;
  }

  const [sayac,setSayac] =useState(Hesapla());
    
  useEffect(() => {
   
      setSayac(Hesapla());
   
  },[sayac]);
   
  
  return (
    <div className="App">
          <img src={baby} alt="" />
         <h1>TIME LEFT TO PAULINA'S BIRTHDAY</h1>
        <h2>{sayac.days} days:{sayac.hours} hours:{sayac.minutes} minutes:{sayac.seconds} seconds</h2>
    </div>
  );
}
export default App;
