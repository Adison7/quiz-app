import React, { useState } from 'react';
import Question from './components/Question'; // Import the Question component

const App = () => {
    // List of questions with their options and correct answers
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            answer: "Paris"
        },
        {
            question: "Who is the CEO of Tesla?",
            options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Sundar Pichai"],
            answer: "Elon Musk"
        },
        {
            question: "What is the largest planet in the Solar System?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "Which language is used to style web pages?",
            options: ["HTML", "JavaScript", "CSS", "Python"],
            answer: "CSS"
        },
        {
            question: "Which is the most popular programming language?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: "Python"
        }
    ];

    // React state to track the current question, selected options, and if the score should be shown
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
    const [showScore, setShowScore] = useState(false);

    // Handle selecting an option for a question
    const handleOptionChange = (selectedOption) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[currentQuestion] = selectedOption;
        setSelectedOptions(newSelectedOptions);
    };

    // Handle submitting the quiz
    const handleSubmit = () => {
        setShowScore(true);
    };

    // Calculate the final score
    const calculateScore = () => {
        return questions.reduce((score, question, index) => {
            if (selectedOptions[index] === question.answer) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    return (
        <div className="App">
            <h1>Student Portal - MCQ Test</h1>
            {!showScore ? (
                <div>
                    <Question
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        selectedOption={selectedOptions[currentQuestion]}
                        handleOptionChange={handleOptionChange}
                    />
                    <button
                        onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                        disabled={currentQuestion === 0}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => currentQuestion < questions.length - 1 && setCurrentQuestion(currentQuestion + 1)}
                        disabled={currentQuestion === questions.length - 1}
                    >
                        Next
                    </button>
                    {currentQuestion === questions.length - 1 && (
                        <button onClick={handleSubmit}>
                            Submit
                        </button>
                    )}
                </div>
            ) : (
                <div>
                    <h2>Your Score: {calculateScore()} out of {questions.length}</h2>
                </div>
            )}
        </div>
    );
};

export default App;
