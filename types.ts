
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export enum Category {
  GENERAL = 'General Knowledge',
  SCIENCE = 'Science',
  HISTORY = 'History',
  TECHNOLOGY = 'Technology'
}

export interface Question {
  id: number;
  category: Category;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: string | null;
  isCorrect: boolean;
  timeSpent: number; // in seconds
}

export interface QuizResults {
  totalScore: number;
  totalQuestions: number;
  answers: UserAnswer[];
  totalTime: number;
}
