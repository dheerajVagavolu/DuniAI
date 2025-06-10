# AI Learning Companion

## Overview
AI Learning Companion is an innovative platform that provides personalized AI-powered learning experiences. It helps users learn and grow by connecting them with AI companions that can assist in various subjects and topics, making learning more interactive and engaging.

## Motivation
The motivation behind this project is to revolutionize the way people learn by:
- Making learning more accessible and personalized
- Providing 24/7 AI-powered assistance
- Creating an engaging and interactive learning environment
- Supporting multiple subjects and learning styles
- Tracking progress and maintaining learning history

## Features
- 🤖 **AI Companions**: Create and interact with specialized AI learning companions
- 📚 **Multiple Subjects**: Support for various subjects and topics
- 💬 **Interactive Learning**: Real-time conversations with AI companions
- 📊 **Progress Tracking**: Monitor learning progress and session history
- 🔒 **Secure Authentication**: User authentication and session management
- 🎯 **Personalized Experience**: Tailored learning paths and recommendations
- 📱 **Responsive Design**: Learn on any device with a beautiful interface
- 🔍 **Type Safety**: Full TypeScript support for reliable development

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

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
