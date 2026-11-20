import QuizNavigator from "./QuizNavigators";
export default function ShowQuestions({
  questions,
  currentIndex,
  isClicked,
  setIsClicked,
  answersHistory,
  setAnswersHistory,
  nextQuestion,
}) {
  const choices = ["A", "B", "C", "D"];

  const handleAnswerSelect = (currentQuestion, answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setAnswersHistory([
        ...answersHistory,
        {
          question: currentQuestion.question,
          answer: answer,
          correctAnswer: currentQuestion.correctAnswer,
          isCorrect: true,
        },
      ]);
    } else {
      setAnswersHistory([
        ...answersHistory,
        {
          question: currentQuestion.question,
          answer: answer,
          correctAnswer: currentQuestion.correctAnswer,
          isCorrect: false,
        },
      ]);
    }
  };

  const handleAnswerSubmit = (currentQuestion, answer) => {
    if (!isClicked) {
      handleAnswerSelect(currentQuestion, answer);
      setIsClicked(true);
    }
  };

  return (
    <div className="text-white pl-8 pr-8 mt-3 flex flex-col">
      <h3 className="text-2xl font-bold">{questions[currentIndex].question}</h3>
      <ul className="mt-3">
        {questions[currentIndex].answers.map((answer, index) => (
          <li
            className="border-gray-500 bg-[#263550] border-2 mb-2 h-[35px] place-content-center rounded-lg pl-2 hover:border-[#8B5CF6] cursor-pointer"
            key={index}
            onClick={() => handleAnswerSubmit(questions[currentIndex], answer)}
          >
            <span className="pr-2 border-r-2 border-[#A78BFA]">{choices[index]}</span>{" "}
            <span className="pl-2">{answer}</span>
          </li>
        ))}
      </ul>

      <QuizNavigator title="Next Question" buttonType={nextQuestion} />
    </div>
  );
}
