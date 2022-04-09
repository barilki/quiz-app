import React, {useEffect, useState} from "react";

const API_URL = "https://opentdb.com/api.php?amount=100";



class Quiz extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            setQuestions: [],
            questions: [],
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion:{},
            answer:'',
            numberOfQuestions: 0,
            numberOfAnsweredQuestion: 0,
            currentQuestionIndex: 0,
            score:0,
            correctAnswers:0,
            wrongAnswers: 0,
            hints: 5,
            fifyFifty: 2,
            usedFiftyFifty: false,
            time: {},
            DataisLoaded: false
        };
    }

    componentDidMount(){
        fetch(API_URL).then((res) => res.json())
        .then((json) => {
            this.setState({
                questions: json,
                DataisLoaded: true
            });
        })
        const{questions, currentQuestion,nextQuestion,previousQuestion} = this.state;
        this.displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);

    }

    displayQuestions = (questions = this.state.questions, currentQuestion,nextQuestion,previousQuestion)=>{
        let {currentQuestionIndex} = this.state; 
        if(!isEmpty(this.state.questions)){
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex -1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                answer
            })
        }


    
   

    };


    render(){

        const {currentQuestion} = this.state;
        console.log(currentQuestion);
        return(
        
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
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
                    <h5>{currentQuestion.questions}</h5>
                    <div className="options-container">
                        <p className="options">1997</p>
                        <p className="options">1998</p>
                    </div>
                    <div className="options-container">
                        <p className="options">1999</p>
                        <p className="options">2000</p>
                    </div>

                    <div className="button-container">
                        <button>Previous</button>
                        <button>Next</button>
                        <button>Quit</button>
                    </div>
                    </section>
                </div>
            </Fragment>
        );
    }

}

export default Quiz
