import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../QuizContext";

const Home = () => {
  const { resetQuiz } = useQuiz();

  const handleStartQuiz = () => {
    resetQuiz(); // Reset quiz state before starting
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-600 via-purple-700 to-indigo-800 text-white">
      {/* Centered Start Quiz Button */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <Link to="/quiz" onClick={handleStartQuiz}>
          <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-300 shadow-lg mb-4">
            Start Quiz
          </button>
        </Link>
      </div>

      {/* Main Content Sections */}
      <div className="flex flex-col items-center space-y-20">
        {/* Welcome Heading */}
        <h1 className="text-4xl md:text-5xl px-4 font-extrabold text-center drop-shadow-lg mt-20">
          Welcome <br />to the Basics Quiz!
        </h1>

        {/* Section 3: Why Take This Quiz? */}
        <section className="w-full px-8 text-center">
          <h2 className="text-3xl md:text-4xl mt-16 font-semibold mb-4">
            Why Take This Quiz?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Computers are everywhere in today's world. Taking this quiz can help
            you assess your knowledge and learn essential computer basics.
          </p>
        </section>

        {/* Section 1: About the Quiz */}
        <section className="w-full px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            About This Quiz
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            This quiz will test your fundamental knowledge of computers. From
            hardware to software, explore basic computer concepts that everyone
            should know.
          </p>
          <Link to="/about">
            <button className="px-3 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition duration-300 text-xs md:float-none md:block md:mx-auto">
              Learn More
            </button>
          </Link>
        </section>

        {/* Section 2: How to Play */}
        <section className="w-full px-8 py-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How to Play
          </h2>
          <p className="text-lg mb-12 md:text-xl leading-relaxed max-w-3xl mx-auto">
            Click "Start Quiz" to begin. Answer each question to the best of
            your ability and see how much you know about the basics of
            computing.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
