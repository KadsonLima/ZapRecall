import reactDom from "react-dom";
import Home from './Components/App/App'

function App(){

    return (
        <Home/>
    )
}


reactDom.render(<App />, document.querySelector(".root"));