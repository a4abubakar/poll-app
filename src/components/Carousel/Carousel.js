import React from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

const Carousel = ({ steps, currentStep, onStepChange }) => {
    return (
        <div className="carousel">
            <div className="carousel-navigation">
                {steps.map((_, index) => (
                    <div
                        key={index}
                        className={`circle ${currentStep === index ? "active" : ""}`}
                        role="button"
                        onClick={() => onStepChange(index)}
                    />
                ))}
            </div>
            {steps.map((step, index) => (
                <motion.div
                    key={step.id}
                    className={`carousel-item ${currentStep === index ? "active" : ""}`}
                    initial={{ y: currentStep === index ? 0 : "100%" }}
                    animate={{ y: currentStep === index ? 0 : "-100%" }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>{step.title}</h1>
                </motion.div>
            ))}
        </div>
    );
};

export default Carousel;
