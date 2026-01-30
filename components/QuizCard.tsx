
import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import { TIMER_SECONDS_PER_QUESTION } from '../constants';

interface QuizCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (selectedOption: string | null, timeSpent: number) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  questionIndex, 
  totalQuestions, 
  onAnswer 
}) => {
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS_PER_QUESTION);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    setTimeLeft(TIMER_SECONDS_PER_QUESTION);
    setSelectedOption(null);
    startTimeRef.current = Date.now();

    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [question.id]);

  const handleAutoSubmit = () => {
    const timeSpent = TIMER_SECONDS_PER_QUESTION;
    onAnswer(null, timeSpent);
  };

  const handleSubmit = () => {
    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
    onAnswer(selectedOption, Math.min(timeSpent, TIMER_SECONDS_PER_QUESTION));
  };

  const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;
  const timerColor = timeLeft > 5 ? 'text-purple-600' : 'text-red-500 animate-pulse';

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="h-2 bg-gray-100">
        <div 
          className="h-full bg-purple-600 transition-all duration-500" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${timerColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={`text-xl font-bold tabular-nums ${timerColor}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">
          {question.question}
        </h3>

        <div className="space-y-4 mb-8">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOption(option)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group ${
                selectedOption === option 
                ? 'border-purple-600 bg-purple-50 text-purple-700' 
                : 'border-gray-100 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium">{option}</span>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedOption === option ? 'border-purple-600' : 'border-gray-300'
              }`}>
                {selectedOption === option && <div className="w-3 h-3 bg-purple-600 rounded-full" />}
              </div>
            </button>
          ))}
        </div>

        <button
          id="submit-question"
          disabled={selectedOption === null}
          onClick={handleSubmit}
          className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95 ${
            selectedOption === null 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {questionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
