import React from 'react'
import { RedoOutlined, PlayCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './customCss/main_page.css';
import NewNumberAudio from '../audio/glowaudio.wav'
import { Card, Tag } from 'antd';

const MainPage = (props) => {
    const [audioClick] = React.useState(typeof Audio != "undefined" && new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/tick.mp3"));
    const [audioNewNumber] = React.useState(typeof Audio != "undefined" && new Audio(NewNumberAudio));
    const [generatedNumbers, setGeneratedNumbers] = React.useState([])
    const [clickedNumbers, setClickedNumbers] = React.useState([])
    const [nextNumber, setNextNumber] = React.useState(null);
    const [highScore, setHighScore] = React.useState(0);
    const [isGameOver, setIsGameOver] = React.useState(false);

    const startGame = () => {
        setTimeout(function(){ generateNewNumber() }, 500);
    }
    const resetGame = () => {
        setNextNumber(null)
        setGeneratedNumbers([])
        setClickedNumbers([])
        setIsGameOver(false)
    }

    React.useEffect(() => {
        checkIfGameIsOver();
    }, [clickedNumbers]);

    const checkIfGameIsOver = () =>{
        let i;
        let over=false;
        if(clickedNumbers.length === 0){
            return ;
        }else{
            for(i = 0; i < clickedNumbers.length ; i++){
                if (clickedNumbers[i]!=generatedNumbers[i]){
                    over = true
                    break;
                }
            }
            if (!over && clickedNumbers.length === generatedNumbers.length){
                setTimeout(function(){ generateNewNumber() }, 1000);
                if(highScore <= clickedNumbers.length){
                    setHighScore(clickedNumbers.length)
                }
            }else if(over){
                setIsGameOver(true)
            }
        }
    }

    const handleNumberClick = (number) =>{
        var joined = clickedNumbers.concat(number);
        setClickedNumbers( joined )
        audioClick.play();
        
    }
    const generateNewNumber = () => {
        if(!isGameOver){
            setClickedNumbers([])
            let num = Math.round(Math.random()*3+1)
            setNextNumber(num)
            var joined = generatedNumbers.concat(num);
            setGeneratedNumbers( joined )
            audioNewNumber.play();
        }
    }

    return (
        <div style={{
            marginTop: `1rem`,
            width: '100%',
            display: 'flex',
            minHeight: '880px',
            flexDirection: 'row',
          }}>
            <div className="card-container">
                <Card data-number="1" disabled={isGameOver} className="card tomato" onClick={(event)=>handleNumberClick(1)}>
                    1
                </Card>
                <Card data-number="2" disabled={isGameOver} className="card blueviolet" onClick={(event)=>handleNumberClick(2)}>
                    2
                </Card>
                <Card data-number="3" disabled={isGameOver} className="card darkorange" onClick={(event)=>handleNumberClick(3)}>
                    3
                </Card>
                <Card data-number="4" disabled={isGameOver} className="card darkgreen" onClick={(event)=>handleNumberClick(4)}>
                    4
                </Card>
            </div>
            
            <div>
              {nextNumber ? <RedoOutlined title="Restart" className="play-reset-btn" onClick={resetGame} /> : <PlayCircleOutlined title="Start" className="play-reset-btn" onClick={startGame}/>}
                {isGameOver && <h3>Game Over!!!</h3>}
                <h3>High Score: {highScore}</h3>
                {isGameOver && <h3>Correct sequesnce: {generatedNumbers}</h3>}
                {nextNumber && <h3 className="number">{nextNumber}</h3>}
                <h3>Your Stack: </h3>
                <div className='tag-container'>
                    {clickedNumbers.map(function(num) {
                        return (
                            <Tag className="tag" color="#cd201f">
                                {num}
                            </Tag>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default MainPage;