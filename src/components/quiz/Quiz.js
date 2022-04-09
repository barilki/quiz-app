import React, {useEffect, useState} from "react";


const API_URL = "https://opentdb.com/api.php?amount=100";



const Quiz = ()=>{

 const [questions, setQuestions] = useState([]);
 const [index, setIndex] = useState(0);
 const [answers, setAnswers] = useState([]);
 const [numberOfQuestions, setNumberOfQuestions] = useState(0);
 const [numberOfAnsweredQuestion, setNumberOfAnsweredQuestion] = useState(0);
 const [score, setScore] = useState(0);
 const [correctAnswers, setCorrectAnswers] = useState(0);
 const [wrongAnswers, setWrongAnswers] = useState(0);
 const [isUseFiftyFifty, setIsUseFiftyFifty] = useState(false);
 const [gameTime, setGameTime] = useState();
 
 const hints = 5;
 const fifyFifty = 2;

 useEffect(() =>{
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const questions = data.results.map((question) => ({
          ...question,
          answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
        }))
        console.log('questions:',questions)
        setQuestions(questions)
      });
  },[])


  const handleCorrectAnswer = ()=>{

  }

  const handleWrongAnswer = ()=>{

}

  const handleQuestions = (event)=>{
      const chosenAnswer = event.target.innerText;
      console.log('chosenAnswer:',chosenAnswer);
 
  }

//  useEffect(()=>{
//     fetch(API_URL)
//     .then((res) => res.json())
//     .then((json) => {

//             questions: json.results.map((question)=>({
//                 ...question,
//                 answers:[question.correct_answer,...question.incorrect_answers].sort(()=> Math.random()*0.5)

//             }))
     
//         setQuestions(question)
//     })
//  },[]);




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
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span><span className="lifeline">2</span>
                </p>
                <p>
                    <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span><span className="lifeline">5</span>
                </p>
            </div>
            <div>
                <p>
                    <span className="left" style={{float: 'left'}}>1 of 15</span>
                   <span className="right">2:15<span className="mdi mdi-clock-outline mdi-24px"></span></span>
                </p>
            </div>
         <h5>{questions[index]?.question}</h5>
            <div className="options-container">
                <p onClick={handleQuestions} className="options">{questions[index]?.answers[0]}</p>
                <p onClick={handleQuestions} className="options">{questions[index]?.answers[1]}</p>
            </div>
            <div className="options-container">
                <p onClick={handleQuestions} className="options">{questions[index]?.answers[2]}</p>
                <p onClick={handleQuestions} className="options">{questions[index]?.answers[3]}</p>
            </div>
   
            <div className="button-container">
                <button>Previous</button>
                <button  >Next</button>
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



// class Quiz extends React.Component{

//     componentDidMount(){
//         fetch(API_URL)
//         .then((res) => res.json())
//         .then((json) => {

//             this.setState({
//                 questions: json.results.map((question)=>({
//                     ...question,
//                     answers:[question.correct_answer,...question.incorrect_answers].sort(()=> Math.random()*0.5)

//                 }))
//             });
//         })
//         const{questions, currentQuestion,nextQuestion,previousQuestion} = this.state;
     
//         this.displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);

//     }

//     displayQuestions = (questions = this.state.questions, currentQuestion,nextQuestion,previousQuestion)=>{
//         let {currentQuestionIndex} = this.state; 
//         console.log('outside if')
//         if(!isEmpty(this.state.questions)){
//             console.log('inside if ')
//             questions = this.state.questions;
//             currentQuestion = questions[currentQuestionIndex];
//             nextQuestion = questions[currentQuestionIndex + 1];
//             previousQuestion = questions[currentQuestionIndex -1];
//             const answer = currentQuestion.answer;
//             console.log('currentQuestion', currentQuestion);
//             this.setState({
//                 currentQuestion,
//                 nextQuestion,
//                 previousQuestion,
//                 answer
//             })
//         }
//     };


//     render(){

//         const {questions} = this.state;
//         console.log(questions)
    
//         return(
    
           
//         );
//     }

// }

