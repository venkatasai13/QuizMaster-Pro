
import React from 'react';
import { QuizResults } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface ResultsViewProps {
  results: QuizResults;
  onRestart: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ results, onRestart }) => {
  const correctCount = results.answers.filter(a => a.isCorrect).length;
  const incorrectCount = results.totalQuestions - correctCount;
  
  const pieData = [
    { name: 'Correct', value: correctCount },
    { name: 'Incorrect', value: incorrectCount }
  ];

  const barData = results.answers.map((ans, idx) => ({
    question: `Q${idx + 1}`,
    time: ans.timeSpent,
    status: ans.isCorrect ? 'Correct' : 'Incorrect'
  }));

  const COLORS = ['#9333ea', '#ef4444'];

  const getPerformanceMessage = () => {
    const percentage = (correctCount / results.totalQuestions) * 100;
    if (percentage === 100) return { title: "Perfect!", color: "text-green-600", desc: "Absolute mastery achieved." };
    if (percentage >= 80) return { title: "Great Job!", color: "text-purple-600", desc: "You have a solid understanding." };
    if (percentage >= 50) return { title: "Good Effort", color: "text-blue-600", desc: "Keep practicing to improve." };
    return { title: "Keep Learning", color: "text-orange-600", desc: "Every failure is a step to success." };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-2">Quiz Completed</h2>
          <h3 className={`text-4xl font-extrabold mb-4 ${performance.color}`}>{performance.title}</h3>
          <p className="text-gray-600 mb-6">{performance.desc}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="block text-2xl font-bold text-gray-800">{results.totalScore}</span>
              <span className="text-xs text-gray-500 uppercase">Total Score</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="block text-2xl font-bold text-gray-800">{results.totalTime}s</span>
              <span className="text-xs text-gray-500 uppercase">Total Time</span>
            </div>
          </div>
        </div>

        <div className="w-64 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center -mt-36">
            <span className="block text-3xl font-bold text-purple-600">
              {Math.round((correctCount / results.totalQuestions) * 100)}%
            </span>
            <span className="text-xs text-gray-400 font-medium">Accuracy</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h4 className="text-lg font-bold text-gray-800 mb-6">Time Spent Per Question (Seconds)</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="question" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="time" radius={[4, 4, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.status === 'Correct' ? '#9333ea' : '#ef4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 overflow-hidden">
          <h4 className="text-lg font-bold text-gray-800 mb-6">Detailed Breakdown</h4>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {results.answers.map((ans, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${ans.isCorrect ? 'bg-purple-600' : 'bg-red-500'}`}>
                    Q{idx + 1}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {ans.isCorrect ? 'Correct Answer' : 'Missed'}
                  </span>
                </div>
                <span className="text-xs text-gray-400 italic">{ans.timeSpent}s spent</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        id="restart-quiz"
        onClick={onRestart}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
        Try Again
      </button>
    </div>
  );
};

export default ResultsView;
