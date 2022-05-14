import logo from '../../assets/img/logo.png';
import './styles.css';
import deck from "../../deck/deck";
import Card from "./cards"
import react from 'react';

function Deck() {

    const quest = deck;
    const [questEnd, setQuest] = react.useState(0)

    return (
        <>
            <div className="screen">
                <div className="top"> <img src={logo} width={52} height={60} alt={logo}></img><span>ZapRecall</span></div>
                {quest.map((e, index)=>(<Card key={index} e={e} index={index}/>))}

            </div>
            <div className='footer'>{questEnd}/{quest.length} CONCLUÍDOS</div>
        </>
    )
}

export default Deck;