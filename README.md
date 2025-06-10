# AI Learning Companion

## Overview

This platform helps users prepare for job interviews or skill assessments by generating personalized questions based on job posts and learning preferences. Users interact with the system through voice or text in real time, guided by a conversational AI agent that provides instant feedback and walkthroughs of the problems.

This prototype features a multimodal, real-time natural voice agent, powered by Vapi, which dynamically reacts to both voice input and typed text, providing responsive guidance. The platform currently enables interactive learning experiences with AI companions, offers support across various subjects, and provides real-time feedback and progress tracking.

## Motivation

The motivation behind this project is to enhance learning by:

- Providing accessible and personalized learning paths.
- Offering real-time AI assistance.
- Creating an interactive learning environment.
- Supporting multiple subjects and learning styles.
- Tracking user progress and maintaining learning history.

## Features

- 🗣️ **Multimodal Voice Agent**: A real-time natural voice AI agent powered by Vapi that reacts to both voice input and typed text.
- 🤖 **AI Companions**: Create and interact with specialized AI learning companions.
- 💬 **Interactive Learning**: Real-time conversations with AI companions.
- 📊 **Progress Tracking**: Monitor learning progress and session history.
- 🔒 **Secure Authentication**: User authentication and session management.
- 📱 **Responsive Design**: The application is designed to work well across different devices.
- 🔍 **Type Safety**: Built with TypeScript for improved code quality and reliability.

## Future Features

- **AI Memory**: Implement AI memory for continuous learning and personalized interactions.
- **RAG with Web Crawlers**: Integrate Retrieval-Augmented Generation with web crawlers for enhanced information gathering.
- **Search Latest Job Posts for Insights**: Functionality to analyze job market trends for skill insights based on user input.
- **Search Documentation for up-to-date content**: Functionality to gather content from relevant external documentation.

## Tech Stack

### Frontend

- Next.js 15.3.3
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- React Hook Form
- Zod (Schema validation)

### AI & Backend

- OpenAI Integration
- Vapi AI Integration
- Clerk (Authentication)
- Supabase (Database)

### Development Tools

- ESLint
- Turbopack
- TypeScript
- Tailwind CSS
- PostCSS

## Getting Started

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
# Fill in your environment variables
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/              # Next.js app directory
│   ├── companions/   # AI companion related pages
│   ├── sign-in/     # Authentication pages
│   └── subscription/ # Subscription management
├── components/       # Reusable React components
├── lib/             # Utility functions and shared logic
├── public/          # Static assets
├── types/           # TypeScript type definitions
└── constants/       # Application constants
```
