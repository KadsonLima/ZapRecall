import seta from '../../assets/img/setinha.png';
import './styles.css';
import react from 'react';

function Cards({ deck, index ,func , ini }) {

    const [clicked, setClicked] = react.useState(1);
    function aplicarSet(x){
        setClicked(clicked+x)
        console.log(x)
        if(clicked === 3){
        
            func({quant:ini.quant+1, win:ini.win = [...ini.win, x]})
            console.log(ini.win)
        }

    }

    if (clicked === 1) {
        return (<div className='card' onClick={() => { setClicked(clicked + 1)}}>
            <span>Pergunta {index + 1}</span>
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
        </div>)
    }
    if (clicked === 2) {
        return (<div className='questOpen' >
            <div >{deck['quest']}</div>
            <img src={seta} alt={seta} onClick={() => { setClicked(clicked + 1)}}></img>
        </div>)
    }
    if (clicked === 3) {

        return (<div className='questOpen'>
            <div >{deck['answer']}</div>
            <div className='flex'>
                    <div  className="choice vermelho" onClick={()=>aplicarSet(1)}>Não lembrei</div>
                    <div className="choice amarelo" onClick={()=>aplicarSet(2)}>Quase não lembrei</div>
                    <div className="choice verde" onClick={()=>aplicarSet(3)}>Lembrei</div>
                </div>
        </div>)
    }if(clicked === 4){

        return (<div className='card etapa4 red' > 
            <span>Pergunta {index + 1}</span>
            <ion-icon name="close-circle" size="large"></ion-icon>
        </div>)
    }if(clicked === 5){
        return (<div className='card etapa4 yellow' > 
        <span>Pergunta {index + 1}</span>
        <ion-icon name="help-circle" size="large"></ion-icon>
    </div>)
    }if(clicked === 6){
        return (<div className='card etapa4 green' > 
        <span>Pergunta {index + 1}</span>
        <ion-icon name="checkmark-circle" size="large"></ion-icon>
    </div>)
    }
    





}

export default Cards;