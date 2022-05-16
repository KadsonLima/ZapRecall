import logo from '../../assets/img/logo.png';
import './styles.css';
import deck from "../../deck/deck";
import Card from "./cards"
import react from 'react';
import Good from '../../assets/img/party.png'
import Sad from '../../assets/img/sad.png'
import {Link} from 'react-router-dom';


function Deck() {

    const quest = deck;
    const [questEnd, setQuest] = react.useState({ quant: 0, win:[]} )


    
    const terminadas = questEnd.win.map((e, index)=>{
        if(e === 1){
           return <div key={index} className='red'><ion-icon name="close-circle" size="large"></ion-icon></div>
        }else if(e === 2){
            return <div key={index} className='yellow'><ion-icon name="help-circle" size="large"></ion-icon></div>
        }else{
           return <div key={index} className='green'><ion-icon color="green" name="checkmark-circle" size="large"></ion-icon></div>
        }
    })

    const fim = (questEnd.win.includes(1))?
    (<><h3><img alt={Sad} src={Sad}/>  Putz...</h3><span>Ainda faltam alguns...Mas não desanime!</span></>)
    :
    (<><h3><img alt={Good} src={Good}/> Parabéns!</h3><span>Você não esqueceu de nenhum flashcard!</span></>)

    const footer = (questEnd.quant === quest.length) ?
        (<div className='footer'>
            {fim}
            
            <div>{questEnd.quant}/{quest.length} CONCLUÍDOS</div>
            <div className='box'>{terminadas}</div>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
            <div className='reiniciar'> Reiniciar !!</div>
            </Link>
        </div>)
        :
        (<div className='footer'>
            
            <div>{questEnd.quant}/{quest.length} CONCLUÍDOS</div>
            <div className='box'>{terminadas}</div>
            
        </div>)


    return (
        <>
            <div className="screen">
                <div className="top"> <img src={logo} width={52} height={60} alt={logo}></img><span>ZapRecall</span></div>
                {quest.map((e, index) => (<Card key={index} deck={e} index={index} func={setQuest} ini={questEnd} />))}
                {footer}
            </div>
            
        </>
    )


  
}

export default Deck;