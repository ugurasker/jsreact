// ? React'da JSX olarak adlandirilan bir soz dizimi kullanilir.
// ? Bu soz dizimi JS'ye benzese de bazi farkliliklari vardir.
// ? Icersinde dogrudan HTML kodu kullanilabilir.

// ! Komponentler tanimlanirken tek bir Element (div, section, article v.b)ile sarmalanarak dondurulmelidir.
// komponent icerisinde inline stillendirme yapilabilir
//stillendirme yazim key-value seklindedir.
//property value camel casedir.
//Stillendirme bir degisen olarak da tanimlanabilir ve 
//istenildiginde kullanilabilir.
const pStil = {
  color:"purple",
  marginTop: "40px",
  fontFamily: "Tahoma",
  border: "2px solid blue",
};
function Selamla() {
  return (
    <div>
      <h1 style ={{color: "red",backgroundColor: "grey"}}>React Dersimizie Hosgeldiniz..</h1>
      <p style={pStil}>Bu dersimizde React Komponentlerini Taniyacagiz.</p>
    </div>
  );
}

export default Selamla;
