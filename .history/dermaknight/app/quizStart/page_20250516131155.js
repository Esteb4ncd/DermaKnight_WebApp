
import styles from '@/app/quizStart/page.module.css';


export default function QuizStartPage() {
    return (
        <div className='auth-container'>
            <img src="/images/dermaKnight_LogoBody.svg" ></img>
            <div></div>
            <button type="submit" className="auth-btn primary startQuiz">Start Quiz</button>
        </div>
    )
}