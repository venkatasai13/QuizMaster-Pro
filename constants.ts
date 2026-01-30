import { Question, Category, Difficulty } from './types';

export const QUESTION_POOL: Question[] = [
  // Easy Level (5 Questions)
  {
    id: 1,
    category: Category.GENERAL,
    difficulty: Difficulty.EASY,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    id: 4,
    category: Category.SCIENCE,
    difficulty: Difficulty.EASY,
    question: "What is the chemical symbol for water?",
    options: ["HO2", "H2O", "O2H", "WA"],
    correctAnswer: "H2O"
  },
  {
    id: 7,
    category: Category.HISTORY,
    difficulty: Difficulty.EASY,
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: "1945"
  },
  {
    id: 10,
    category: Category.TECHNOLOGY,
    difficulty: Difficulty.EASY,
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Processor Universal"],
    correctAnswer: "Central Processing Unit"
  },
  {
    id: 13,
    category: Category.GENERAL,
    difficulty: Difficulty.EASY,
    question: "What is the largest animal currently living on Earth?",
    options: ["African Elephant", "Blue Whale", "Colossal Squid", "Giraffe"],
    correctAnswer: "Blue Whale"
  },

  // Medium Level (5 Questions)
  {
    id: 2,
    category: Category.GENERAL,
    difficulty: Difficulty.MEDIUM,
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra"
  },
  {
    id: 5,
    category: Category.SCIENCE,
    difficulty: Difficulty.MEDIUM,
    question: "How many bones are in the adult human body?",
    options: ["186", "206", "216", "256"],
    correctAnswer: "206"
  },
  {
    id: 8,
    category: Category.HISTORY,
    difficulty: Difficulty.MEDIUM,
    question: "Who was the first female Prime Minister of Great Britain?",
    options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
    correctAnswer: "Margaret Thatcher"
  },
  {
    id: 11,
    category: Category.TECHNOLOGY,
    difficulty: Difficulty.MEDIUM,
    question: "Which company developed the Java programming language?",
    options: ["Microsoft", "Apple", "Sun Microsystems", "IBM"],
    correctAnswer: "Sun Microsystems"
  },
  {
    id: 14,
    category: Category.SCIENCE,
    difficulty: Difficulty.MEDIUM,
    question: "Which chemical element has the symbol 'Fe'?",
    options: ["Fluorine", "Iron", "Ferrum", "Fermium"],
    correctAnswer: "Iron"
  },

  // Hard Level (5 Questions)
  {
    id: 3,
    category: Category.GENERAL,
    difficulty: Difficulty.HARD,
    question: "Which country is the world's largest producer of coffee?",
    options: ["Vietnam", "Colombia", "Ethiopia", "Brazil"],
    correctAnswer: "Brazil"
  },
  {
    id: 6,
    category: Category.SCIENCE,
    difficulty: Difficulty.HARD,
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correctAnswer: "Nitrogen"
  },
  {
    id: 9,
    category: Category.HISTORY,
    difficulty: Difficulty.HARD,
    question: "What was the name of the Egyptian sun god?",
    options: ["Anubis", "Osiris", "Ra", "Horus"],
    correctAnswer: "Ra"
  },
  {
    id: 12,
    category: Category.TECHNOLOGY,
    difficulty: Difficulty.HARD,
    question: "In computer science, what does 'FIFO' stand for?",
    options: ["First In First Out", "Fast In Fast Out", "Final Input Final Output", "First In Final Out"],
    correctAnswer: "First In First Out"
  },
  {
    id: 15,
    category: Category.SCIENCE,
    difficulty: Difficulty.HARD,
    question: "What is the rarest naturally occurring element on Earth's crust?",
    options: ["Astatine", "Francium", "Promethium", "Radium"],
    correctAnswer: "Astatine"
  }
];

export const TIMER_SECONDS_PER_QUESTION = 15;