import React from 'react';

const Question = ({ question, options, selectedOption, handleOptionChange }) => {
    return (
        <div>
            <h3>{question}</h3>
            {options.map((option, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={(e) => handleOptionChange(e.target.value)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default Question;
