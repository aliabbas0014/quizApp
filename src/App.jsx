// src/App.jsx
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import QuizPage from './pages/QuizPage';
import Footer from './components/Footer';
import { QuizProvider } from './QuizContext'; // Import the QuizProvider


function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen flex flex-col ">
        <Router basename='/quizApp'>
          <Navbar />
          <main className="flex-grow ">
            <Routes>
              <Route path="/quizApp" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </QuizProvider>
  );
}

export default App;
