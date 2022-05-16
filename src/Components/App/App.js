import Inicio from "./../inicio/inicio";
import Play from "./../play/play";
import "./../../assets/css/reset.css";
import "./../../assets/css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
    return (<BrowserRouter>
        <Routes >
            <Route path="/" element={<Inicio></Inicio>} />
            <Route path="/play" element={<Play></Play>} />
        </Routes>
    </BrowserRouter>)
}

export default App;