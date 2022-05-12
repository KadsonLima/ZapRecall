import reactDom from "react-dom";
import react from "react";
import Inicio from "./assets/Components/inicio/inicio.js";
import Play from "./assets/Components/play/play";
import "./assets/css/reset.css";
import "./assets/css/styles.css";
import deck from "./deck/deck"

function App(){

    const [init, setInit] = react.useState(0);

    function trocaTela(){
        setInit(init+ 1);
    }

    return (<>  
                {init === 0?<Inicio init={init} set={trocaTela}/>: <Play />}
                
                
        </>)
}


reactDom.render(<App />, document.querySelector(".root"));