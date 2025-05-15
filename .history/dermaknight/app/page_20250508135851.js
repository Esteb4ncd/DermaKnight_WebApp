import './page.module.css'
import QuizButton from "@/app/ui/quizButton/QuizButton.js";

export default function QuizPage() {
  return (
    <div>
      <h1>this is a test</h1>
      <QuizButton text="13-18" />
      <QuizButton text="19-24" />
      <QuizButton text="" />
      <QuizButton text="luppy" />
    </div>
  );
}