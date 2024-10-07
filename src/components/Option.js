import React from "react";

const Option = ({
  option,
  questionIndex,
  optionIndex,
  isSelected,
  onOptionChange,
}) => {
  return (
    <div>
      <div>
        <input
          type="radio"
          name={`question-${questionIndex}`}
          value={optionIndex}
          checked={isSelected}
          onChange={() => onOptionChange(questionIndex, optionIndex)}
        />
        <label>{option}</label>
      </div>
    </div>
  );
};

export default Option;
