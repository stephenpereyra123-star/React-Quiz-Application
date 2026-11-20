import { useState } from "react";
export default function QuizBreakdown({ answersHistory }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="text-white p-3 ">
        <li className="border pl-5 pr-5 rounded-xl border-[#A78BFA] bg-[#433477] mb-3">
          <h3 className="text-2xl font-bold">{answersHistory[index].question}</h3>
        </li>
        <li
          className={`${answersHistory[index].isCorrect === true ? "text-green-500" : "text-red-500"} text-center font-bold`}
        >
          Your Answer - {answersHistory[index].answer}
        </li>
        <li className={`${answersHistory[index].isCorrect === false ? "text-green-500" : null} text-center font-bold`}>
          {answersHistory[index].isCorrect === false && answersHistory[index].correctAnswer}
        </li>
      </ul>
      <div className="flex gap-20 text-white">
        <button
          className="bg-[#8B5CF6] border-2 border-[#A78BFA] rounded-lg pl-2 pr-2 mt-5"
          onClick={() => index > 0 && setIndex((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          className="bg-[#8B5CF6] border-2 border-[#A78BFA] rounded-lg pl-2 pr-2 mt-5"
          onClick={() => index < answersHistory.length - 1 && setIndex((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
