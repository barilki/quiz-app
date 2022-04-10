import React, {useEffect, useState} from "react";
import M from 'materialize-css';
import Timer from "../../utils/timer";

const API_URL = "https://opentdb.com/api.php?amount=10";



const Quiz = ()=>{

 const [questions, setQuestions] = useState([]);
 const [index, setIndex] = useState(0);
 const [answers, setAnswers] = useState([]);
//  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
 const [numberOfAnsweredQuestions, setNumberOfAnsweredQuestions] = useState(0);
 const [score, setScore] = useState(0);
 const [hints,setHints] = useState(5);
 const [correctAnswers, setCorrectAnswers] = useState(0);
 const [wrongAnswers, setWrongAnswers] = useState(0);
 const [isUseFiftyFifty, setIsUseFiftyFifty] = useState(false);
 const [gameTime, setGameTime] = useState(50);
 const [prevRandomNumbers, setPrevRandomNumbers]= useState([]);
 const [fiftyFifty , setFiftyFifty]= useState(2);



 useEffect(() =>{
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const questions = data.results.map((question) => ({
          ...question,
          answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
        }))
        setQuestions(questions)
        if(Timer(setTimeOut,index)==0){
            setIndex(prevState => prevState +1)
        }
      });
    }
    ,[]
    )


  const handleCorrectAnswer = ()=>{
    M.toast({
        html: 'Correct answer!',
        classes: 'toast-valid',
        displayLength: 1500
    })
    setScore(prevScore => prevScore+1)
    setCorrectAnswers(prevCorrectAnswer => prevCorrectAnswer+1)
    setIndex(prevIndex => prevIndex + 1)
    setNumberOfAnsweredQuestions(prevNumberOfAnsweredQuestions => prevNumberOfAnsweredQuestions +1)
  }

  const handleWrongAnswer = ()=>{
      M.toast({
          html: 'Wrong answer!',
          classes: 'toast-valid',
          displayLength: 1500
      })
      setWrongAnswers(prevWrongAnswer=> prevWrongAnswer +1)
      setIndex(prevIndex => prevIndex +1)
      setNumberOfAnsweredQuestions(prevNumberOfAnsweredQuestions => prevNumberOfAnsweredQuestions)
}

  const handleOptions = (event)=>{
      showOptions()
      const chosenAnswer = event.target.innerText;
      console.log(questions[index].correct_answer)
      if(chosenAnswer === questions[index]?.correct_answer){
          handleCorrectAnswer();
      } else{
          handleWrongAnswer();
      }

      console.log('chosenAnswer:',chosenAnswer);
    
  }

  const handleHints = () => {
      const options = Array.from(document.querySelectorAll('.options'));
      let indexOfAnswer;

      options.forEach((option,index)=>{
          if(option === questions[index].correct_answer){
              setIndex(index)
          }
      })

      while(true){
          const randomNumber = Math.round(Math.random()*3);
          if(randomNumber !== index && !prevRandomNumbers.includes(randomNumber)){
              options.forEach((option,index)=>{
                  if(index === randomNumber){
                      option.style.visibility = 'hidden';
                      setHints(prevHints => prevHints - 1)
                      setPrevRandomNumbers(prevRandomNumbers.concat(randomNumber))
                  }
              })
              break;
          }
      }
  }

  const handleFiftyFifty = () => {
      if(fiftyFifty > 0 && isUseFiftyFifty === false){
          const options = document.querySelectorAll('.option');
          const randomNumbers = [];
          let indexOfAnswer;

          options.forEach((option,i)=> {
              if(option === questions[index].correct_answer){
                  indexOfAnswer = i;
              }
          });

          let count = 0;
          do{
              const randomNumber = Math.round(Math.random()*3);
              if (randomNumber !== indexOfAnswer){
                  if(randomNumbers.length < 2 && !randomNumbers.includes(randomNumber) && !randomNumbers.includes(indexOfAnswer)){
                      randomNumbers.push(randomNumber)
                      count ++;
                  } else {
                      while(true){
                          const newRandomNumber = Math.round(Math.random()*3);
                          if(!randomNumbers.includes(newRandomNumber)&& newRandomNumber!==indexOfAnswer){
                              randomNumbers.push(newRandomNumber);
                              count++;
                              break;
                          }
                      }
                  }
              }
          } while (count <2);
          options.forEach((option,i)=>{
              if(randomNumbers.includes(i)){
                option.style.visibility = 'hidden';
              }
          });
          setFiftyFifty(prevState => prevState -1)
          setIsUseFiftyFifty(true)
      }
  }

  const showOptions = () =>{
      const options = Array.from(document.querySelectorAll('.options'));

      options.forEach(option => {
          option.style.visibility = 'visible';
      })

      console.log('show options')
  }







//  const handleAnswer = (answer) => {
//     if(!showAnswers){
//       if(answer === questions[currentIndex].correct_answer){
//         setScore(score+1);
//       }
//     }
//     setShowAnswers(true);
// }

// const handleNextQuestion = () => {
//     setCurrentIndex(currentIndex+1);
//     setShowAnswers(false);
// }


return(
    
    <>
    
    {
        <>   
        <title>Quiz Page</title>
        <div className="questions">
            <section>
            <div className="lifeline-container">
                <p>
                    <span onClick={handleFiftyFifty} className="mdi mdi-set-center mdi-24px lifeline-icon"></span><span className="lifeline">{fiftyFifty}</span>
                </p>
                <p>
                    <span onClick={handleHints} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span><span className="lifeline">{hints}</span>
                </p>
            </div>
            <div>
                <p>
                    <span className="left" style={{float: 'left'}}>{index} of 10</span>
                   <span className="right">  <Timer
                      gameTime={setGameTime}
                      index={setIndex}
                    /><span className="mdi mdi-clock-outline mdi-24px"></span></span>
                </p>
            </div>
         <h5 dangerouslySetInnerHTML={{__html:questions[index]?.question}}/>
            <div className="options-container">
                <p onClick={handleOptions} className="options" dangerouslySetInnerHTML={{__html:questions[index]?.answers[0]}}/>
                <p onClick={handleOptions} className="options" dangerouslySetInnerHTML={{__html:questions[index]?.answers[1]}}/>
            </div>
            <div className="options-container">
                <p onClick={handleOptions} className="options" dangerouslySetInnerHTML={{__html:questions[index]?.answers[2]}}/>
                <p onClick={handleOptions} className="options" dangerouslySetInnerHTML={{__html:questions[index]?.answers[0]}}/>
            </div>
   
            <div className="button-container">
                <button>Quit</button>
            </div>
            </section>
        </div>
        </>
    }
 </>
);
};

export default Quiz

