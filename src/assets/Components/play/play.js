import logo from '../../img/logo.png';
import seta from '../../img/setinha.png';
import './styles.css';

function Deck(props){

    const quest = props.deck;

    function clickQuest(bolean, index){
        if(bolean){

        }
    }

    const quests = quest.map((e, index)=>
        <div className='card' key={e+index} onClick={()=>clickQuest(true)} >
            <span>Pergunta {index+1}</span>
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
        </div>
    )

    const questOpen = quest.map((e, index)=>
                    <div className='questOpen' key={index}> 
                        <div>{e['quest']}</div>
                        <img src={seta} alt={seta}></img>
                    </div>
    )

    return (
        <>
        <div className="screen">
            <div className="top"> <img src={logo}  width={52} height={60} alt={logo}></img><span>ZapRecall</span></div>
           {1==1 ? quests: questOpen}
            
        </div>
        <div className='footer'>0/{quest.length} CONCLUÍDOS</div>
        </>
    )
}

export default Deck;