import { ArrowRight } from "lucide-react";

export default function QuizNavigator({ title, buttonType }) {
  return (
    <button onClick={buttonType} className="bg-[#8B5CF6] rounded-xl w-[125px] p-1 self-end mt-2">
      {title}
      {/* <span>
        <ArrowRight size={20} className="inline" />
      </span> */}
    </button>
  );
}
