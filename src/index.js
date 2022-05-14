import reactDom from "react-dom";
import Inicio from "./Components/inicio/inicio.js";
import Play from "./Components/play/play.js";
import "./assets/css/reset.css";
import "./assets/css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){

    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Inicio></Inicio>} /> 
                <Route  path="/play" element={<Play></Play>} /> 
            </Routes>
        </BrowserRouter>
    )
}


reactDom.render(<App />, document.querySelector(".root"));