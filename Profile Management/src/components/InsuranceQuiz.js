// src/components/InsuranceQuiz.js
import React, { useState } from 'react';
import './InsuranceQuiz.css';

const InsuranceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  const questions = [
    {
      question: "What does a deductible refer to in insurance?",
      options: [
        "The amount you pay before insurance kicks in",
        "The maximum amount insurance will pay",
        "Your monthly premium amount",
        "The insurance agent's commission"
      ],
      correct: 0
    },
    {
      question: "Which type of insurance is legally required for drivers?",
      options: [
        "Collision insurance",
        "Liability insurance",
        "Comprehensive insurance",
        "Uninsured motorist insurance"
      ],
      correct: 1
    },
    {
      question: "What is a premium in insurance terms?",
      options: [
        "The amount you receive when you make a claim",
        "The amount you pay regularly for your coverage",
        "The bonus for claim-free years",
        "The initial sign-up fee"
      ],
      correct: 1
    },
    {
      question: "What does 'term life insurance' mean?",
      options: [
        "Insurance that covers you for a specific period",
        "Insurance that covers all family members",
        "Insurance with complicated terms and conditions",
        "Insurance that builds cash value over time"
      ],
      correct: 0
    },
    {
      question: "What is an insurance 'rider' or 'endorsement'?",
      options: [
        "Someone who processes insurance claims",
        "Additional coverage added to a basic policy",
        "A discount for safe drivers",
        "The person who sells insurance policies"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="insurance-quiz">
      <h3>Test Your Insurance Knowledge</h3>
      
      {showScore ? (
        <div className="score-section">
          <h4>You scored {score} out of {questions.length}</h4>
          <div className="score-circle">
            <span>{Math.round((score / questions.length) * 100)}%</span>
          </div>
          <p>
            {score === questions.length ? "Perfect! You're an insurance expert!" :
             score >= questions.length / 2 ? "Good job! You know your insurance basics!" :
             "Keep learning! Review our educational resources to improve your knowledge."}
          </p>
          <button onClick={restartQuiz} className="restart-btn">
            <i className="fas fa-redo"></i>
            Try Again
          </button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index}
                onClick={() => handleAnswer(index)}
                className="option-btn"
              >
                {option}
              </button>
            ))}
          </div>
          
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceQuiz;