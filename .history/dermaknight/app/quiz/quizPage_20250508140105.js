import QuizButton from './ui/quizButton/QuizButton.js';

export default function QuizPage() {
  return (
    <div className='.auth-container {
  padding: 32px;
  max-width: 393px;
  margin: 0 auto;
  text-align: center;
}'>
      <h1>this is a test</h1>
      <QuizButton text="oppy" />
      <QuizButton text="guppy" />
      <QuizButton text="muppy" />
      <QuizButton text="luppy" />
    </div>
  );
}