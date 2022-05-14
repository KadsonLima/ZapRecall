import seta from '../../assets/img/setinha.png';
import './styles.css';
import react from 'react';


function Cards({e, index}){

    const [clicked, setClicked] = react.useState(true);
    const [virar, setVirar] = react.useState(true);

    return  (
        (clicked) ?
        (<div className='card' onClick={() =>{setClicked(!clicked)}}>
            <span>Pergunta {index + 1}</span>
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
        </div>)
        :
    (virar) ?
        (<div className='questOpen' >
            <div>{e['quest']}</div>
            <img src={seta} alt={seta} onClick={()=>setVirar(!virar)}></img>
        </div>)
        :
        (<div className='questOpen' >
            <div>{e['answer']}</div>
        </div>)
        
        )


}

export default Cards;