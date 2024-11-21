import React, { useState } from "react";
import stepsConfig from "../../utils/stepsConfig";
import Carousel from "../Carousel/Carousel";
import Option from "../Option/Option";
import Summary from "../Summary/Summary";
import "./PollForm.css";

const PollForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleOptionSelect = (optionLabel) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentStep] = optionLabel;
        setAnswers(updatedAnswers);

        if (currentStep < stepsConfig.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(currentStep.length);
        }
    };

    const onStepChange = (stepIndex) => {
        setCurrentStep(stepIndex);
    };

    const handleSubmit = async () => {
        const mockApiUrl = "https://jsonplaceholder.typicode.com/posts";
        const payload = { answers };
        try {
            const response = await fetch(mockApiUrl, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                alert("Data submitted successfully!");
                setCurrentStep(0)
            }
        } catch (error) {
            alert("Failed to submit data!");
        }
    }

    return (
        <div className="poll-form">
            <Carousel steps={stepsConfig} currentStep={currentStep} onStepChange={onStepChange} />
            <div className="options">
                {currentStep < stepsConfig.length ? (
                    stepsConfig[currentStep].options.map((option) => (
                        <Option
                            key={option.id}
                            icon={option.icon}
                            label={option.label}
                            onSelect={handleOptionSelect}
                        />
                    ))
                ) : (
                    <Summary answers={answers} onSubmit={handleSubmit} />
                )}
            </div>
        </div>
    );
};

export default PollForm;
