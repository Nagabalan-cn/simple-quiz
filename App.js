import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "1 . Smallest state of India is?",
      options: [
        { id: 0, text: "Nepal", isCorrect: false },
        { id: 1, text: "Gujarath", isCorrect: false },
        { id: 2, text: "AnthraPrathesh", isCorrect: false },
        { id: 3, text: "Goa", isCorrect: true },
      ],
    },
    {
      text: "2 . National Tree of India is",
      options: [
        { id: 0, text: "Banyan Tree", isCorrect: true },
        { id: 1, text: "Peepal Tree", isCorrect: false },
        { id: 2, text: "Sandal Tree", isCorrect: false },
        { id: 3, text: "Neem Tree", isCorrect: false },
      ],
    },
    {
      text: "3 . Most widely spoken language in the world is?",
      options: [
        { id: 0, text: "English", isCorrect: false },
        { id: 1, text: "Spanish", isCorrect: false },
        { id: 2, text: "Tamil", isCorrect: false },
        { id: 3, text: " Mandarin", isCorrect: true },
      ],
    },
    {
      text: "4 . Which bird can not fly?",
      options: [
        { id: 0, text: "Peacock", isCorrect: false },
        { id: 1, text: "Ostrich", isCorrect: true },
        { id: 2, text: "Kiwi", isCorrect: false },
        { id: 3, text: "Duck", isCorrect: false },
      ],
    },
    {
      text: "5 . Which is the smallest bird in the world ?",
      options: [
        { id: 0, text: "Costa’s Hummingbird ", isCorrect: false },
        { id: 1, text: "Bee Hummingbird ", isCorrect: true },
        { id: 2, text: "Verdin", isCorrect: false },
        { id: 3, text: "Lesser Goldfinch", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Codenatives Quiz </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2 className="nan">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;