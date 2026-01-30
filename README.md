## QuizMaster Pro – Dynamic Quiz Application
## Project Overview

QuizMaster Pro is a dynamic quiz application built using React and JavaScript.
The application allows users to select quiz categories and difficulty levels, attempt timed questions, and view detailed result analysis after completing the quiz.

The project focuses on real-time logic, clean UI design, result analytics, and automation-friendly structure, making it suitable for both development and testing scenarios.

## Tech Stack

Frontend: React, TypeScript, JavaScript, HTML, CSS (Tailwind CSS)

Charts & Analytics: Recharts

Automation Testing: Selenium WebDriver (Java)

IDE: VS Code / Eclipse / IntelliJ

Version Control: Git & GitHub

## Key Features

Category & difficulty-based quiz selection

One question displayed at a time

Countdown timer for each question

Auto-submit when timer reaches zero

Tracks time spent per question

Calculates total score and accuracy

Visual result analysis using charts

Responsive design (Desktop & Mobile)

Automation-ready UI with stable selectors

## Timer Functionality

Each question has a fixed timer (configurable)

Timer resets automatically for every new question

If time runs out, the question is auto-submitted

Time spent per question is recorded accurately

## Result Analysis

After quiz completion, the application displays:

Total score

Accuracy percentage

Correct vs Incorrect answers (Pie Chart)

Time spent per question (Bar Chart)

Detailed per-question breakdown

 Automation Testing Scope

Selenium automation scripts validate:

Application launch & page load

Quiz start and question navigation

Answer selection

Quiz submission

Result page verification (score, accuracy, charts)

Screenshots, logs, and screen recordings are captured during automation execution as part of testing documentation.

 ## How to Run the Project Locally

Clone the repository:

git clone https://github.com/your-username/quizmaster-pro.git


Navigate to the project directory:

cd quizmaster-pro


Install dependencies:

npm install


Start the application:

npm start


## Open in browser:

http://localhost:3000

 Project Structure
src/
 ├── components/
 │   ├── Layout.tsx
 │   ├── SetupForm.tsx
 │   ├── QuizCard.tsx
 │   └── ResultsView.tsx
 ├── constants.ts
 ├── types.ts
 ├── App.tsx
 └── index.tsx
