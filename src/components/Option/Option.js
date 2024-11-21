import React from "react";
import { motion } from "framer-motion";
import "./Option.css";

const Option = ({ icon, label, onSelect }) => {
    return (
        <motion.div
            className="option"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSelect(label)}
        >
            <span className="option-icon">{icon}</span>
            <span className="option-label">{label}</span>
        </motion.div>
    );
};

export default Option;
