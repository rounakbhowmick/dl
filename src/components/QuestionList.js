import React from "react";
import Question from "./Question";

const QuestionList = ({
  questions,
  currentAnswers,
  onOptionChange,
  incorrectAnswers,
}) => {
  console.log("curren", currentAnswers);
  return (
    <>
      <div>
        {questions.map((question, index) => (
          <Question
            key={index}
            actualdlquestionkey={index}
            questionIndex={question.id}
            question={question}
            currentAnswer={currentAnswers[question.id]}
            onOptionChange={onOptionChange}
            isIncorrect={incorrectAnswers[question.id]}
          />
        ))}
      </div>
    </>
  );
};

export default QuestionList;
