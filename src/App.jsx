// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DogCard from "./components/DogCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="gallery">
        <DogCard
          image="https://pixabay.com/get/g2a0f00592d125eea4502ecf1e665c67da9ce3baf5be73e7d903b69cf69419dd3e7d9fc514f05c2194fb760efe1b059f0cc77d702ec001871678edbbeab6517e1_1280.jpg"
          name="Rex"
          description="Rex es un perro imponente y leal. Es inteligente y está siempre alerta para proteger a su familia. Tiene una energía inagotable y le encanta correr y jugar al aire libre."
          color="primary"
          text="Pastor Alemán"
        />
        <DogCard
          image="https://pixabay.com/get/g8d96dc3db1f0549abf0680f9a8fcb4d0945975851c4f9e134a36bc48ccc38aecbd8f872b55b3e3d79e5bd0bcdae29a53eff101b30432f2cb7044cb59ef1d9db5_1280.jpg"
          name="Chispita"
          description="Chispita es alegre y sociable. Tiene una personalidad juguetona y es muy cariñosa con todas las personas. Le encanta recibir atención y ser el centro de atención."
          color="success"
          text="Corgi"
        />
        <DogCard
          image="https://pixabay.com/get/g36250437a7ad3adf9c186fb5335006ffb15a13b62346828e75a0469bc21386ae3d792e4501f12f53d4cd88d7fea47d53107898c84022e938cf5334801da0149b_1280.jpg"
          name="Aquiles"
          description="Aquiles es dulce y amistoso. Es un excelente compañero de juegos y se lleva bien con otros perros. Su lealtad y disposición para aprender lo convierten en un perro ideal para familias."
          color="warning"
          text="Labrador Retriver"
        />
        <DogCard
          image="https://pixabay.com/get/g135839f7a7cb4d3033adac1ec141dc9c547a0b5a94fc5d6d3e6aca31b06de7a4090dd695025cd8dd1a7c74475a6ad317898525e22c45530d5fc5e9e46b1cc33b_1280.jpg"
          name="Lobo"
          description="Lobo es imponente y poderoso. Aunque pueda parecer intimidante, es un perro leal y cariñoso con su familia. Es un amante de la naturaleza y disfruta de largas caminatas y actividades al aire libre."
          color="danger"
          text="Malamuto"
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
