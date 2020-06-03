import React from "react";

const Question = () => {
  const travelQuestion = [
    {
      number: 1,
      question: "How can you afford to travel long term",
    },
  ];
  return (
    <React.Fragment>
      <div className="question-container">
        {travelQuestion.map((q) => (
          <div key={q.number} className={`question-${q.number}`}>
            <h1 key={q.number} className={`title-${q.number}`}>
              {q.question}
            </h1>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Question;
