import React from "react";
import "./Summary.css";

const Summary = ({ answers, onSubmit }) => {
    return (
        <div className="summary">
            <h2>Summary</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        Question {index + 1}: {answer}
                    </li>
                ))}
            </ul>
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};

export default Summary;
