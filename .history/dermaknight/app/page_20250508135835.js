import './page.module.css'
import QuizButton from "@/app/ui/quizButton/QuizButton.js";

export default function QuizPage() {
  return (
    <div>
      <h1>this is a test</h1>
      <QuizButton text="13-18" />
      <QuizButton text="guppy" />
      <QuizButton text="muppy" />
      <QuizButton text="luppy" />
    </div>
  );
}