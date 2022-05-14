import logo from '../../assets/img/logo.png';
import './styles.css';
import deck from "../../deck/deck";
import Card from "./cards"


function Deck() {

    const quest = deck;


    return (
        <>
            <div className="screen">
                <div className="top"> <img src={logo} width={52} height={60} alt={logo}></img><span>ZapRecall</span></div>
                {quest.map((e, index)=>(<Card key={index} e={e} index={index}/>))}

            </div>
            <div className='footer'>0/{quest.length} CONCLUÍDOS</div>
        </>
    )
}

export default Deck;