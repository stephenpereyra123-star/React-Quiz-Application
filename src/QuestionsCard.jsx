import { useState } from "react";
import questions from "./questions";
import QuizNavigator from "./QuizNavigators";
import ShowQuestions from "./ShowQuestions";
import QuizResults from "./QuizResults";
import QuizBreakdown from "./QuizBreakdown";

import { ClipboardCheck, ChartNoAxesColumnIncreasing, ListChecks } from "lucide-react";
import { FaReact } from "react-icons/fa";

export default function QuestionsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [showContent, setShowContent] = useState("quiz");

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1 && isClicked) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsClicked(false);
    }
  };

  let displayedContent;

  if (showContent === "quiz") {
    displayedContent = (
      <ShowQuestions
        questions={questions}
        currentIndex={currentIndex}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        answersHistory={answersHistory}
        setAnswersHistory={setAnswersHistory}
        nextQuestion={nextQuestion}
      />
    );
  } else if (showContent === "review") {
    displayedContent = <QuizBreakdown answersHistory={answersHistory} />;
  } else if (showContent === "results") {
    displayedContent = <QuizResults answersHistory={answersHistory} questions={questions} />;
  }

  // const prevQuestion = () => {
  //   if (currentIndex > 0) {
  //     return setCurrentIndex((prevIndex) => prevIndex - 1);
  //   }
  // };

  return (
    <main className="border-3 rounded-3xl w-5xl h-[600px] m-auto flex flex-col bg-[#111B35] border-[#A78BFA]">
      <div className="border-2 rounded-xl w-[75%] h-[60%] self-center mt-6 border-[#A78BFA] bg-[#192440]">
        <div className="flex gap-3 bg-[#8B5CF6] rounded-t-lg p-2">
          <FaReact size={40} color="#61DAFB" />
          <h2 className="text-white self-center font-bold text-xl">
            React <span className="opacity-75">Quiz</span>
          </h2>
        </div>
        {displayedContent}
      </div>

      <section className="flex justify-evenly items-center h-[40%]">
        <div
          className="w-[200px] h-[150px] border rounded-xl bg-[#155579] border-sky-300 cursor-pointer place-content-center place-items-center text-center"
          onClick={() => setShowContent("quiz")}
        >
          <ListChecks size={28} color="#38BDF8" />
          <span className="text-white text-xl font-semibold">Quiz</span>
        </div>

        <div
          className="w-[200px] h-[150px] border rounded-xl bg-[#433477] border-purple-400 place-content-center place-items-center text-center cursor-pointer"
          onClick={() => currentIndex + 1 === questions.length && setShowContent("review")}
        >
          <ChartNoAxesColumnIncreasing size={28} color="#A78BFA" />
          <span className="text-white text-xl font-semibold">Review</span>
        </div>

        <div
          className="w-[200px] h-[150px] border rounded-xl place-content-center place-items-center text-center bg-[#166747] border-green-400 cursor-pointer"
          onClick={() => currentIndex + 1 === questions.length && setShowContent("results")}
        >
          <ClipboardCheck size={28} color="#4ADE80" />
          <span className="text-white text-xl font-semibold">Result's</span>
        </div>
      </section>
    </main>
  );
}
