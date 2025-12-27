# ChatBot Client

Modern React frontend for the ChatBot application. Built with TypeScript, Vite, and Tailwind CSS for a fast, responsive user experience.

## 🎨 Features

- **Fast Refresh** - Instant updates during development with Vite
- **TypeScript** - Full type safety across the application
- **React Compiler** - Optimized rendering with the latest React features
- **Responsive Design** - Mobile-first UI that works on all devices
- **Real-time Chat** - Live message updates with typing indicators
- **ESLint & Prettier** - Automatic code quality and formatting

## 📦 Tech Stack

- **React** 19 with React Compiler
- **TypeScript** 5+
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Popular icon library

## 🚀 Getting Started

### Installation

From the project root:

```bash
bun install
```

### Development

Start the development server:

```bash
cd packages/client
bun run dev
```

The app will open at `http://localhost:5173` with hot module replacement (HMR) enabled.

### Building for Production

```bash
bun run build
```

Optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
bun run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── chat/          # Chat-related components
│   │   ├── ChatBot.tsx
│   │   ├── ChatInput.tsx
│   │   ├── ChatMessages.tsx
│   │   └── TypingIndicator.tsx
│   └── ui/            # Reusable UI components
│       └── button.tsx
├── lib/
│   └── utils.ts       # Utility functions
├── assets/            # Static assets
│   └── sounds/        # Audio files
├── App.tsx            # Root component
├── main.tsx           # Entry point
├── index.css          # Global styles
└── App.css            # App-specific styles
```

## 🔧 Scripts

- `bun run dev` - Start development server
- `bun run build` - Create production build
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## 💻 Component Guide

### ChatBot

Main chat interface component that orchestrates the conversation flow.

### ChatMessages

Displays message history with proper formatting and timestamps.

### ChatInput

User input field with send button and validation.

### TypingIndicator

Animated indicator showing when the AI is typing.

## 🏄 Best Practices

- Use TypeScript for type safety
- Keep components small and focused
- Use utility functions from `lib/utils.ts`
- Follow ESLint rules for code quality

## 🔗 API Integration

The client communicates with the backend server at `http://localhost:3000` (or configured via environment variables).

## 📱 Responsive Design

The UI is fully responsive and works on:

- Desktop (1920px and up)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🚦 Development Workflow

1. Make changes to React components
2. Vite HMR will automatically refresh the page
3. Check ESLint warnings in the terminal
4. Commit changes (Prettier will auto-format)

## 📖 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)

## 🐛 Troubleshooting

**Port already in use?**

```bash
bun run dev -- --port 3001
```

**Clear cache and rebuild:**

```bash
rm -rf node_modules dist
bun install
bun run build
```

---

**Ready to chat? Start the development server and begin building! 💬**
