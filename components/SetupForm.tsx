
import React, { useState } from 'react';
import { Category, Difficulty } from '../types';

interface SetupFormProps {
  onStart: (category: Category, difficulty: Difficulty) => void;
}

const SetupForm: React.FC<SetupFormProps> = ({ onStart }) => {
  const [category, setCategory] = useState<Category>(Category.GENERAL);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
      <div className="bg-purple-50 p-8 border-b border-purple-100">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Configure Your Quiz</h2>
        <p className="text-gray-600">Choose your domain and challenge level to begin your session.</p>
      </div>
      
      <div className="p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Select Category</label>
          <div className="grid grid-cols-2 gap-3">
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`p-4 text-left rounded-xl border-2 transition-all ${
                  category === cat 
                  ? 'border-purple-600 bg-purple-50 text-purple-700 shadow-sm' 
                  : 'border-gray-100 hover:border-purple-300 text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Select Difficulty</label>
          <div className="flex gap-3">
            {Object.values(Difficulty).map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficulty(diff)}
                className={`flex-1 py-3 text-center rounded-xl border-2 capitalize transition-all ${
                  difficulty === diff 
                  ? 'border-purple-600 bg-purple-50 text-purple-700 shadow-sm' 
                  : 'border-gray-100 hover:border-purple-300 text-gray-600'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        <button
          id="start-quiz"
          onClick={() => onStart(category, difficulty)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default SetupForm;
