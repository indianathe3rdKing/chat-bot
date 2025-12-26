# ChatBot Server

Express.js backend API for the ChatBot application. Provides RESTful endpoints for chat operations, message handling, and AI-powered responses.

## 🏗️ Features

- **Express.js API** - Fast and minimal web framework
- **TypeScript** - Type-safe backend development
- **RESTful Architecture** - Clean API design
- **Service Layer** - Organized business logic
- **Repository Pattern** - Data access abstraction
- **Conversation Management** - Persistent chat history

## 📦 Tech Stack

- **Express.js** 5.2.1 - Web framework
- **TypeScript** 5+ - Language
- **Bun** 1.3.5+ - Runtime and package manager
- **Node.js Types** - Type definitions

## 🚀 Getting Started

### Installation

From the project root:

```bash
bun install
```

### Development

Start the server:

```bash
cd packages/server
bun run index.ts
```

The server will run on `http://localhost:3000` by default.

### Building

```bash
bun run build
```

## 📁 Project Structure

```
src/
├── index.ts                 # Server entry point & Express setup
├── routes.ts                # API routes
├── controllers/
│   └── chat.controller.ts   # Request handlers
├── services/
│   └── chat.services.ts     # Business logic
├── repositories/
│   └── conversation.repository.ts  # Data access
└── prompts/
    ├── Chatbot.txt          # Default chatbot prompt
    └── WonderWorld.md       # Alternative prompt
```

## 🔌 API Endpoints

### Chat Endpoints

- `POST /api/chat` - Send a message and get AI response
- `GET /api/conversations` - Get conversation history
- `GET /api/conversations/:id` - Get specific conversation
- `DELETE /api/conversations/:id` - Delete conversation

## 📋 Controllers

### ChatController
Handles all chat-related HTTP requests and responses.

**Key Methods:**
- `sendMessage()` - Process incoming messages
- `getConversations()` - Retrieve chat history
- `getConversation()` - Get specific conversation
- `deleteConversation()` - Remove conversation

## 🔧 Services

### ChatService
Core business logic for chat operations.

**Key Methods:**
- `processMessage()` - Generate AI responses
- `validateInput()` - Input validation
- `formatResponse()` - Response formatting

## 💾 Repositories

### ConversationRepository
Data access layer for conversation storage.

**Key Methods:**
- `save()` - Store conversation
- `findById()` - Retrieve conversation
- `findAll()` - Get all conversations
- `delete()` - Remove conversation

## 📝 Prompts

Chatbot behavior is defined by prompt files:

- **Chatbot.txt** - Default conversational prompt
- **WonderWorld.md** - Alternative prompt for themed responses

Modify these files to change the AI's personality and responses.

## 🔨 Scripts

- `bun run index.ts` - Start development server
- `bun run build` - Create production build
- `bun run dev` - Run with auto-reload (if configured)

## 🌐 Environment Variables

Create a `.env` file in the `packages/server` directory:

```env
PORT=3000
NODE_ENV=development
AI_MODEL=gpt-3.5-turbo
API_KEY=your_api_key_here
```

## 🚀 Request/Response Examples

### Send Message

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?"}'
```

**Response:**
```json
{
  "id": "conv-123",
  "message": "Hello, how are you?",
  "response": "I'm doing great! How can I help you today?",
  "timestamp": "2025-12-26T10:30:00Z"
}
```

### Get Conversations

```bash
curl http://localhost:3000/api/conversations
```

## 🔒 Security

- Always validate user input
- Implement rate limiting for production
- Use environment variables for sensitive data
- Sanitize responses before sending to client

## 🧪 Testing

Test the API using the included `makeRequest.http` file:

```bash
bun install -g rest-client
# Then open makeRequest.http and send requests
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
PORT=3001 bun run index.ts
```

**Clear dependencies:**
```bash
rm -rf node_modules
bun install
```

**Check TypeScript errors:**
```bash
bun check
```

## 📚 Resources

- [Express.js Documentation](https://expressjs.com)
- [Bun Documentation](https://bun.sh)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Integration with Client

The server works seamlessly with the React frontend:

1. Client sends messages to `/api/chat`
2. Server processes with AI logic
3. Response is returned and displayed in chat UI
4. Conversation history is stored

---

**Backend ready to power your ChatBot! 🚀**
