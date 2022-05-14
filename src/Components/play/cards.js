import seta from '../../assets/img/setinha.png';
import './styles.css';
import react from 'react';
import Choices from './choices';
import styled from 'styled-components';

function Answer(props) {
    return (
        <>
            {props.children}
        </>
    )
}

function Cards({ e, index }) {

    const [clicked, setClicked] = react.useState(true);
    const [virar, setVirar] = react.useState(true);


    const Flex = styled.div`
    display:flex;
    justify-content: space-between;
    `



    return (
        (clicked ) ?
            (<div className='card' onClick={() => { setClicked(!clicked) }}>
                <span>Pergunta {index + 1}</span>
                <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
            </div>)
            :
            (virar) ?
                (<div className='questOpen' >
                    <div>{e['quest']}</div>
                    <img src={seta} alt={seta} onClick={() => setVirar(!virar)}></img>
                </div>)
                :
                (<div className='questOpen'>
                    <div >{e['answer']}</div>
                    <Answer>
                        <Flex>
                            <Choices classe="vermelho" texto="Não lembrei"  set={setClicked} choice={clicked} valor={3}/>
                            <Choices classe="amarelo" texto="Quase não lembrei" set={setClicked} choice={clicked} valor={2}/> 
                            <Choices classe="verde" texto="Lembrei" set={setClicked} choice={clicked} valor={1}/>
                        </Flex>
                    </Answer>
                </div>
                )
    )

}

export default Cards;