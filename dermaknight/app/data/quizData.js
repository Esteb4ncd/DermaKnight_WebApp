export const quizQuestions = [
  {
    id: 1,
    question: "Your age range",
    options: [
      { id: 'a', text: "13-18" },
      { id: 'b', text: "19-24" },
      { id: 'c', text: "25-30" },
      { id: 'd', text: "31+" }
    ],
    correctAnswer: null
  },
  // {
  //   id: 2,
  //   question: "Which is closest to your skin tone?",
  //   options: [
  //     { id: 'a', text: "F8D0B2" },
  //     { id: 'b', text: "EBB691" },
  //     { id: 'c', text: "BD7850" },
  //     { id: 'd', text: "3C1F1B" }
  //   ],
  //   correctAnswer: null
  // },
  {
    id: 3,
    question: "What is your skin type?",
    options: [
      {
        id: 'a',
        text: (
          <>
            <span className="bodyMedium">Combination Oily</span><br />
            <span className="labelSmall">In the T-Zone (forehead, nose) and <br /> normal or dry everywhere else</span>
          </>
        )
      },
      {
        id: 'b',
        text: (
          <>
            <span className="bodyMedium">Dry</span><br />
            <span className="labelSmall">Skin feels tight and dry all-year round <br />and flaking or itching is common</span>
          </>
        )
      },
      {
        id: 'c',
        text: (
          <>
            <span className="bodyMedium">Normal</span><br />
            <span className="labelSmall">Mild oiliness, dryness or breakouts can<br /> appear occasionally</span>
          </>
        )
      },
      {
        id: 'd',
        text: (
          <>
            <span className="bodyMedium">Oily</span><br />
            <span className="labelSmall">Excess oil all over the face, often<br /> causing blocked pores</span>
          </>
        )
      }
    ],
    correctAnswer: null
  },
  {
    id: 4,
    question: "How often do you experience breakouts?",
    options: [
      { id: 'a', text: "Rarely" },
      { id: 'b', text: "Occasionally" },
      { id: 'c', text: "Frequently" },
      { id: 'd', text: "Almost always" }
    ],
    correctAnswer: null
  },
  {
    id: 5,
    question: "Which area of your face gets the most breakouts?",
    options: [
      { id: 'a', text: "Jawline" },
      { id: 'b', text: "Forehead & nose" },
      { id: 'c', text: "Under eyes & cheeks" }
    ],
    correctAnswer: null
  },
  {
    id: 6,
    question: "Which of the following do you think has the most impact on your skin's health?",
    options: [
      { id: 'a', text: "Hormones" },
      { id: 'b', text: "Stress" },
      { id: 'c', text: "Diet" },
      { id: 'd', text: "Bacterial" }
    ],
    correctAnswer: null
  }
];
