import React from 'react';

class Game extends React.Component {

    getNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const sum = value1 + value2 + value3;
        return {
            value1: value1,
            value2: value2,
            value3: value3,
            correctAnswer: sum,
            proposedAnswer: Math.floor(Math.random() * 3) + sum
        }
    };


    state = {
        ...this.getNewQuestion(),
        numQuestions: 0,
        numCorrect: 0
    };

    verifyAnswer = (choice) => {
        const correct = choice === (this.state.proposedAnswer === this.state.correctAnswer) ? 1 : 0;
        this.setState((prevState) => ({
            numQuestions: prevState.numQuestions + 1,
            numCorrect: prevState.numCorrect + correct,
            ...this.getNewQuestion()
        }))
    };

    render() {
        const {
            value1,
            value2,
            value3,
            proposedAnswer,
            numQuestions,
            numCorrect
        } = this.state;

        return (<div className="game">
            <h2>Mental Math</h2>
            <div className="equation">
                <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}?`}</p>
            </div>
            <button onClick={() => this.verifyAnswer(true)}>True</button>
            <button onClick={() => this.verifyAnswer(false)}>False</button>
            <p className="text">
                Your Score: {numCorrect}/{numQuestions}
            </p>
        </div>);
    }
}

export default Game;