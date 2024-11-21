const steps = [
    {
        id: 1,
        title: "How was your week overall?",
        options: [
            { id: 1, icon: "👍", label: "Good" },
            { id: 2, icon: "🤔", label: "Neutral" },
            { id: 3, icon: "👎", label: "Bad" },
        ],
    },
    {
        id: 2,
        title: "What did you enjoy the most?",
        options: [
            { id: 1, icon: "🍕", label: "Food" },
            { id: 2, icon: "🏋️", label: "Exercise" },
            { id: 3, icon: "🎵", label: "Music" },
        ],
    },
    {
        id: 3,
        title: "How do you feel about your productivity?",
        options: [
            { icon: "🔥", label: "Very Productive" },
            { icon: "💼", label: "Average" },
            { icon: "😴", label: "Not Great" },
        ],
    },
    {
        id: 4,
        title: "What do you want to improve next week?",
        options: [
            { icon: "📚", label: "Learning" },
            { icon: "🏋️‍♂️", label: "Fitness" },
            { icon: "🕒", label: "Time Management" },
        ],
    },
];

export default steps;
