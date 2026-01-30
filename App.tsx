
import React, { useState, useCallback, useMemo } from 'react';
import Layout from './components/Layout';
import SetupForm from './components/SetupForm';
import QuizCard from './components/QuizCard';
import ResultsView from './components/ResultsView';
import { Category, Difficulty, Question, UserAnswer, QuizResults } from './types';
import { QUESTION_POOL } from './constants';

enum AppStep {
  SETUP,
  QUIZ,
  RESULTS
}

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.SETUP);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const filteredQuestions = useMemo(() => {
    if (!selectedCategory || !selectedDifficulty) return [];
    return QUESTION_POOL.filter(q => 
      q.category === selectedCategory && q.difficulty === selectedDifficulty
    );
  }, [selectedCategory, selectedDifficulty]);

  const startQuiz = useCallback((category: Category, difficulty: Difficulty) => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    setCurrentQuestionIdx(0);
    setUserAnswers([]);
    setStep(AppStep.QUIZ);
  }, []);

  const handleAnswer = useCallback((selectedOption: string | null, timeSpent: number) => {
    const currentQuestion = filteredQuestions[currentQuestionIdx];
    
    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption,
      isCorrect: selectedOption === currentQuestion.correctAnswer,
      timeSpent
    };

    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);

    if (currentQuestionIdx < filteredQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setStep(AppStep.RESULTS);
    }
  }, [currentQuestionIdx, filteredQuestions, userAnswers]);

  const restart = useCallback(() => {
    setStep(AppStep.SETUP);
    setSelectedCategory(null);
    setSelectedDifficulty(null);
    setCurrentQuestionIdx(0);
    setUserAnswers([]);
  }, []);

  const quizResults: QuizResults = useMemo(() => {
    const totalScore = userAnswers.reduce((acc, curr) => acc + (curr.isCorrect ? 10 : 0), 0);
    const totalTime = userAnswers.reduce((acc, curr) => acc + curr.timeSpent, 0);
    return {
      totalScore,
      totalQuestions: filteredQuestions.length,
      answers: userAnswers,
      totalTime
    };
  }, [userAnswers, filteredQuestions]);

  return (
    <Layout>
      {step === AppStep.SETUP && (
        <SetupForm onStart={startQuiz} />
      )}

      {step === AppStep.QUIZ && filteredQuestions.length > 0 && (
        <QuizCard 
          question={filteredQuestions[currentQuestionIdx]}
          questionIndex={currentQuestionIdx}
          totalQuestions={filteredQuestions.length}
          onAnswer={handleAnswer}
        />
      )}

      {step === AppStep.QUIZ && filteredQuestions.length === 0 && (
        <div className="text-center p-12 bg-white rounded-2xl shadow-xl max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Questions Found</h2>
          <p className="text-gray-600 mb-8">We couldn't find questions for this specific combination. Try another one!</p>
          <button 
            onClick={restart}
            className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold"
          >
            Go Back
          </button>
        </div>
      )}

      {step === AppStep.RESULTS && (
        <ResultsView 
          results={quizResults} 
          onRestart={restart} 
        />
      )}
    </Layout>
  );
};

export default App;
