import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from '../QuizContext'; // Import the context

const About = () => {
  const { resetQuiz } = useQuiz(); // Get the resetQuiz function from context

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen bg-gradient-to-b from-blue-300 via-purple-400 to-pink-200 text-white"> {/* Updated background color */}
      <div className="max-w-2xl w-full bg-gradient-to-b bg-opacity-10 p-8 rounded-lg "> {/* Add subtle background and shadow for the content container */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900"> {/* Centered heading and color change */}
          About This Quiz App
        </h2>
        <p className="text-base lg:text-lg md:text-md text-left mb-16 text-gray-800">
          Welcome to our Quiz App, a fun and engaging platform designed to test your knowledge across a variety of topics! Whether you’re preparing for an exam, looking to enhance your learning, or just want to challenge yourself, this app is here to help you achieve your goals.
        </p>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-left mb-4 text-gray-900"> {/* Section title color change */}
          How to Attempt a Quiz
        </h3>
        <ol className="list-decimal list-inside text-sm lg:text-base text-left mb-4 text-gray-800">
          <li>Select a quiz from the available options.</li>
          <li>Read the question carefully and choose the correct option.</li>
          <li>Click the "Submit" button to see if your answer is correct.</li>
          <li>If you want to revisit previous questions, use the "Previous" button.</li>
          <li>Once you finish, review your results to learn from your mistakes!</li>
        </ol>

        <Link to="/quiz">
          <button 
            onClick={resetQuiz}
            className="text-sm md:text-md lg:text-md px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition duration-300 shadow-md mb-16">
            Start Quiz
          </button>
        </Link>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-left mb-4 text-gray-800">
          Features
        </h3>
        <ul className="list-disc list-inside text-sm lg:text-base text-left mb-16 text-gray-800">
          <li>Diverse Question Categories: Our quiz app offers a wide range of questions covering various subjects, ensuring there's something for everyone.</li>
          <li>User-Friendly Interface: The app is designed with simplicity in mind. Navigate easily through questions and options.</li>
          <li>Instant Feedback: Receive immediate feedback after each question to help you learn and improve.</li>
          <li>Progress Tracking: Keep track of your progress as you move through the quiz.</li>
          <li>Responsive Design: Fully responsive for use on any device, whether it's a phone, tablet, or desktop.</li>
        </ul>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 text-gray-900">
          Purpose
        </h3>
        <p className="text-base lg:text-base text-center mb-16 text-gray-800">
          Our mission is to create a platform where users can expand their knowledge while having fun. We believe that learning should be interactive and enjoyable, which is why we've developed this quiz app.
        </p>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 text-gray-900">
          Join Us!
        </h3>
        <p className="text-base lg:text-base text-center mb-12 text-gray-800">
          We invite you to explore the app, test your knowledge, and share your scores with friends and family. Challenge yourself and see how much you can learn in a fun way!
        </p>

        <p className="text-lg font-medium text-center text-gray-900">
          Thank you for choosing our Quiz App! We hope you enjoy your quiz-taking experience.
        </p>
      </div>
    </div>
  );
};

export default About;
