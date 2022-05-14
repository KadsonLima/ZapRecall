import logo from '../../assets/img/logo.png';
import './styles.css';
import {Link } from 'react-router-dom'

function Welcome(props){


    return (
        <div className="screen-start">
            <img src={logo} alt={logo} width="136px" height="161px"></img>
            <h3>ZapRecall</h3>
            <Link to="/play">
            <button>Iniciar Recall! </button>
            </Link>
        </div>
        
        
    )
}

export default Welcome;