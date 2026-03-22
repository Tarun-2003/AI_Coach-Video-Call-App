# AI Coach Video Call App

An advanced AI-powered video conferencing platform designed for interactive coaching sessions. This application combines communication with AI-driven insights to enhance user engagement and productivity.

Overview

AI Coach Video Call App enables video communication integrated with intelligent coaching assistance. It is built using modern full-stack technologies with a strong focus on performance and developer experience.

Features
1) Real-Time Video Communication
High-quality video and audio streaming for smooth coaching sessions.
2) Integration
Built-in AI logic to assist and enhance user interactions.
3) Modern UI/UX
Clean, responsive interface built using Next.js and Tailwind CSS.
4) Type Safety
Developed using TypeScript (~98% of codebase) for maintainability and reliability.
5) Efficient Database Management
Integrated with PostgreSQL using Drizzle ORM.
6) Component-Based Architecture
Scalable and reusable UI components.

Tech Stack
Category	Technology
Frontend	Next.js (App Router), React
Language	TypeScript
Styling	Tailwind CSS, PostCSS
Backend	Node.js (via Next.js API routes)
Database	PostgreSQL
ORM	Drizzle ORM
Deployment	Vercel

Prerequisites
Node.js (v18+ recommended)
npm / yarn / pnpm
PostgreSQL database

Installation
Clone the repository
git clone https://github.com/Tarun-2003/AI_Coach_Video_Call_App.git

Navigate into the project
cd AI_Coach_Video_Call_App

Install dependencies
npm install
Environment Variables

Create a .env file in the root directory and add:

DATABASE_URL=your_postgresql_connection_string
NEXT_PUBLIC_APP_URL=http://localhost:3000
Run the Development Server
npm run dev

http://localhost:3000

Live Demo

https://ai-coach-video-call-app.vercel.app/sign-in

Deployment

The app is deployed using Vercel.

To deploy your own version:

npm run build

Or connect your repo directly to Vercel.

Contributing

Contributions are welcome!

Fork the repo

Create your feature branch
git checkout -b feature/YourFeature

Commit changes
git commit -m "Add your feature"

Push to branch
git push origin feature/YourFeature

Open a Pull Request
Future Improvements
Authentication enhancements
AI-powered session analytics
Transcription & feedback
Mobile optimization


