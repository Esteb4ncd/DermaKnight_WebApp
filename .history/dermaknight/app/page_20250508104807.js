import './page.module.css'
import quizButton from './ui/quizButton/quizButton.js';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Color Toggle Button Demo</h1>
      <ColorToggleButton />
    </div>
  );
}