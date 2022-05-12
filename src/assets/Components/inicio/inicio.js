import logo from '../../img/logo.png';
import './styles.css';


function Welcome(props){


    return (
        <div className="screen-start">
            <img src={logo} alt={logo} width="136px" height="161px"></img>
            <h3>ZapRecall</h3>
            <button onClick={props.set}>Iniciar Recall! </button>
        </div>
        
        
    )
}

export default Welcome;