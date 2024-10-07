import React, { useState } from "react";
import { questions } from "../utils/constant";
import QuestionList from "./QuestionList";
import Score from "./Score";

// Utility function to pick `n` random elements from an array
const pickRandomQuestions = (questions, n) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const DlApp = () => {
  // Pick 3 random questions from the array when component mounts
  const randomQuestions = pickRandomQuestions(questions, 3);
  const [selectedQuestions, setSelectedQuestions] = useState(randomQuestions);
  const [incorrectAnswers, setIncorrectAnswers] = useState({});
  // const [selectedQuestions, setSelectedQuestions] = useState(questions);

  // Initialize state for current answers as an object, with question IDs as keys
  const [currentAnswers, setCurrentAnswers] = useState(
    selectedQuestions.reduce((acc, question) => {
      acc[question.id] = null;
      return acc;
    }, {})
  );

  const [score, setScore] = useState(null);

  const handleOptionChange = (questionId, optionIndex) => {
    setCurrentAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    const incorrects = {};
    selectedQuestions.forEach((question) => {
      if (currentAnswers[question.id] === question.answer) {
        calculatedScore += 1;
      } else {
        incorrects[question.id] = true; // Mark as incorrect
      }
    });
    setScore(calculatedScore);
    setIncorrectAnswers(incorrects);
  };

  return (
    <div>
      <h1>Traffic Rules Quiz</h1>
      <QuestionList
        questions={selectedQuestions}
        currentAnswers={currentAnswers}
        onOptionChange={handleOptionChange}
        incorrectAnswers={incorrectAnswers}
      />
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && (
        <Score score={score} total={selectedQuestions.length} />
      )}
    </div>
  );
};

export default DlApp;
