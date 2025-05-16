
import styles from '@/app/quizStart/page.module.css';


export default function QuizStartPage() {
    return (
        <div className='auth-container'>
            <img src="/images/dermaKnight_LogoBody.svg" ></img>
            <div className>
            <button type="submit" className="auth-btn primary">Start Quiz</button>
            </div>
        </div>
    )
}