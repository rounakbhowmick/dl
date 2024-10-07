import React from "react";
import Option from "./Option";

const Question = ({
  actualdlquestionkey,
  question,
  questionIndex,
  currentAnswer,
  onOptionChange,
  isIncorrect,
}) => {
  return (
    <div
      className={`question ${isIncorrect ? "incorrect" : ""}`}
      style={{ border: isIncorrect ? "2px solid red" : "none" }}
    >
      <div className="question">
        <h3>
          {actualdlquestionkey + 1}. {question.question}
        </h3>
        {question.image && (
          <img
            src={question.image}
            alt="question related"
            className="question-image"
          />
        )}
        {question.options.map((option, optionIndex) => (
          <Option
            key={optionIndex}
            option={option}
            questionIndex={questionIndex}
            optionIndex={optionIndex}
            isSelected={currentAnswer === optionIndex}
            onOptionChange={onOptionChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
