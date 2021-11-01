import Saat from '../Saat/Saat.jsx'
import Footer from "../Footer/Footer.js";
const stil ={
  textAlign : "center",
  color: "red",
  fontSize: "70px",
}

function App() {
  return (
    <div className="App">
    <h1 style={stil}> React kursuna hosgeldiniz</h1>
      <Saat />
      <Footer />
    </div>
  );
}
export default App;
