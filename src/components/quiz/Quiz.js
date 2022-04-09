import React, {Component, Fragment} from "react";
import {Helmet} from 'react-helmet';


class Quiz extends React.Component{
    // constructor(props){
    //     super(props);

    // }

    increamentCounter = ()=>{
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        })); 
    }

    render(){
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
                    <h5>Google was founded in what year?</h5>
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