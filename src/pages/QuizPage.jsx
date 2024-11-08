import React, { useEffect, useState } from "react";
import { useQuiz } from "../QuizContext";
import quizData from "../data/quizData.json";

const QuizPage = () => {
  const questions = quizData.quiz;
  const {
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
    score,
    setScore,
  } = useQuiz();

  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const totalQuestions = questions.length;
  const [disabledQuestions, setDisabledQuestions] = useState(new Set());

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      handleTimeUp();
    }
  }, [timer]);

  const handleTimeUp = () => {
    setIsSubmitClicked(true);
  };

  const handleOptionSelect = (option) => {
    if (!disabledQuestions.has(currentQuestionIndex)) {
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentQuestionIndex] = option;
      setSelectedOptions(updatedSelectedOptions);
      setIsOptionSelected(true);
    }
  };

  const handleSubmit = () => {
    const updatedMessages = [...resultMessages];
    const updatedShowResult = [...showResult];

    updatedMessages[currentQuestionIndex] = "";

    if (selectedOptions[currentQuestionIndex] !== undefined) {
      if (
        selectedOptions[currentQuestionIndex] ===
        questions[currentQuestionIndex].correctAnswer
      ) {
        updatedMessages[currentQuestionIndex] = "Correct!";
        setScore(score + 1);
      } else {
        updatedMessages[
          currentQuestionIndex
        ] = `Wrong! The correct answer is ${questions[currentQuestionIndex].correctAnswer}.`;
      }
      updatedShowResult[currentQuestionIndex] = true;

      setResultMessages(updatedMessages);
      setShowResult(updatedShowResult);
      setDisabledQuestions((prev) => new Set(prev).add(currentQuestionIndex));
    }

    setIsSubmitClicked(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      if (selectedOptions[currentQuestionIndex + 1] !== undefined) {
        setTimer(0);
      } else {
        setTimer(30);
      }

      setIsOptionSelected(false);
      setIsSubmitClicked(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);

      if (selectedOptions[currentQuestionIndex - 1] !== undefined) {
        setTimer(0);
      } else {
        setTimer(30);
      }

      setIsOptionSelected(false);
      setIsSubmitClicked(false);
    }
  };

  const handleReset = () => {
    resetQuiz();
    setTimer(30);
    setScore(0);
    setDisabledQuestions(new Set());
  };

  return (
    <div className=" flex flex-col items-center justify-center p-4">
      <div className="flex justify-between w-full p-2 rounded-md">
        <div className="text-xs lg:text-base bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-2 rounded-md">
          Score: {score} / {totalQuestions}
        </div>
      </div>

      <div className="flex justify-between w-full mt-6 lg:mt-0 lg:w-11/12 max-w-4xl mb-2">
        <h3 className="text-sm md:text-md lg:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Question No. {currentQuestionIndex + 1} of {questions.length}
        </h3>
        <div className="text-xs font-bold self-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Time Left: {timer} Sec
        </div>
      </div>

      <div className="p-3 rounded-lg mb-4 w-full lg:w-11/12 max-w-4xl mx-auto h-24 lg:h-20 border border-blue-400 shadow-md bg-white font-medium">
        <p className="text-sm md:text-md lg:text-base text-gray-700">
          {questions[currentQuestionIndex].question}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2 w-full lg:w-11/12 max-w-4xl mx-auto">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <div
            className="border border-blue-400 h-12 px-2 py-2 lg:p-1 lg:px-1 rounded-lg w-full shadow-md"
            key={index}
          >
            <button
              onClick={() => handleOptionSelect(option)}
              disabled={disabledQuestions.has(currentQuestionIndex)}
              className={`w-full px-2 py-1 lg:px-4 lg:py-2 text rounded-md text-left text-sm md:text-md lg:text-md font-normal ${
                selectedOptions[currentQuestionIndex] === option
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-800"
              } hover:bg-blue-400 transition duration-200`}
            >
              <span className="mr-2">{index + 1}.</span>
              {option}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between w-full mb-1 mt-2">
        <div className="flex flex-wrap space-x-2 md:mt-0 lg:mr-56">
          <button
            onClick={handleReset}
            className="text-xs w-16 h-8 m-1 bg-red-500 text-white p-1 rounded-md hover:bg-red-400 shadow-lg"
          >
            Reset
          </button>

          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`text-xs w-16 h-8 m-1 p-1 rounded-md ${
              currentQuestionIndex === 0
                ? "bg-gray-400"
                : "bg-blue-500 text-white hover:bg-blue-400 shadow-lg"
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleSubmit}
            disabled={!isOptionSelected || isSubmitClicked}
            className={`text-xs w-16 h-8 m-1 p-1 rounded-md ${
              !isOptionSelected || isSubmitClicked
                ? "bg-gray-400"
                : "bg-green-500 text-white hover:bg-green-400 shadow-lg"
            }`}
          >
            Submit
          </button>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex >= questions.length - 1}
            className={`text-xs w-16 h-8 m-1 p-1 rounded-md ${
              currentQuestionIndex >= questions.length - 1
                ? "bg-gray-400"
                : "bg-blue-500 text-white hover:bg-blue-400 shadow-lg"
            }`}
          >
            Next
          </button>
        </div>

        <div className="flex-grow order-last md:order-none">
          {showResult[currentQuestionIndex] && (
            <p
              className={`text-xs mt-2 lg:mt-1 lg:text-base ml-1 lg:ml-56 ${
                resultMessages[currentQuestionIndex] === "Correct!"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {resultMessages[currentQuestionIndex]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
