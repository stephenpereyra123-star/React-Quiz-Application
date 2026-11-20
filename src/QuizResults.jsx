export default function QuizResults({ answersHistory, questions }) {
  const passingScores = answersHistory.filter((correct) => correct.isCorrect === true);
  const wrongAnswers = answersHistory.filter((incorrect) => incorrect.isCorrect === false);
  let correct = passingScores.length;
  let inCorrect = wrongAnswers.length;

  return (
    <div className="text-center">
      <h2 className="text-[#8B5CF6] text-4xl font-bold">Results</h2>
      <span className="text-center text-white font-bold text-xl">
        You have <span className="text-green-500">{correct}</span> out of {answersHistory.length}
      </span>
    </div>
  );
}
