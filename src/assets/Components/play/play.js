import logo from '../../img/logo.png';
import './styles.css';

function Deck(){

    const quest = ['sahush', 'dsadas ', 'dsadsad' ,'dsadfasd'];

    const quests = quest.map((e, index)=>
        <div className='card' key={e+index}>
            <span>Pergunta {index+1}</span>
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
        </div>
    )



    return (
        <>
        <div className="screen">
            <div className="top"> <img src={logo}  width={52} height={60} alt={logo}></img><span>ZapRecall</span></div>
            {quests}
            
        </div>
        <div className='footer'>0/{quest.length} CONCLUíDOS</div>
        </>
    )
}

export default Deck;