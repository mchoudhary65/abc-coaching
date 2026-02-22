'use strict';

// Navodaya AI Quiz Engine

const questions = {
    mentalAbility: [
        { question: "Question 1 from mental ability", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question 2 from mental ability", options: ["A", "B", "C", "D"], answer: "B" },
        // Add more questions as needed
    ],
    math: [
        { question: "Question 1 from math", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "Question 2 from math", options: ["A", "B", "C", "D"], answer: "D" },
        // Add more questions as needed
    ],
    hindi: [
        { question: "Question 1 from Hindi", options: ["A", "B", "C", "D"], answer: "B" },
        { question: "Question 2 from Hindi", options: ["A", "B", "C", "D"], answer: "A" },
        // Add more questions as needed
    ]
};

// Function to randomly select 20 questions
function selectRandomQuestions() {
    const allQuestions = [...questions.mentalAbility, ...questions.math, ...questions.hindi];
  
    // Shuffle the questions
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
  
    // Select the first 20 questions
    return shuffledQuestions.slice(0, 20);
}

// Export the function for usage
module.exports = {
    selectRandomQuestions
};
