// src/QuizContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const savedIndex = localStorage.getItem('currentQuestionIndex');
    return savedIndex ? parseInt(savedIndex) : 0;
  });
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const savedOptions = localStorage.getItem('selectedOptions');
    return savedOptions ? JSON.parse(savedOptions) : [];
  });
  const [resultMessages, setResultMessages] = useState(() => {
    const savedMessages = localStorage.getItem('resultMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [showResult, setShowResult] = useState(() => {
    const savedResults = localStorage.getItem('showResult');
    return savedResults ? JSON.parse(savedResults) : [];
  });
  const [timer, setTimer] = useState(() => {
    const savedTimer = localStorage.getItem('timer');
    return savedTimer ? parseInt(savedTimer) : 30; // Load timer from local storage
  });

  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore ? parseInt(savedScore) : 0; // Load score from local storage
  });

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setResultMessages([]);
    setShowResult([]);
    setTimer(30);
    setScore(0); // Reset the score
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('selectedOptions');
    localStorage.removeItem('resultMessages');
    localStorage.removeItem('showResult');
  };

  useEffect(() => {
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    localStorage.setItem('resultMessages', JSON.stringify(resultMessages));
    localStorage.setItem('showResult', JSON.stringify(showResult));
    localStorage.setItem('score', score )
    localStorage.setItem('timer', timer)
  }, [currentQuestionIndex, selectedOptions, resultMessages, showResult, score, timer]);

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        setCurrentQuestionIndex,
        selectedOptions,
        setSelectedOptions,
        resultMessages,
        setResultMessages,
        showResult,
        setShowResult,
        resetQuiz,
        timer,
        setTimer,
        score, // Provide score in context
        setScore, // Provide setter for score
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
