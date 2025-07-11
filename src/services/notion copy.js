// Simple mock database for prompts
const mockPrompts = [
  {
    id: '1',
    title: 'Welcome Prompt',
    prompt: 'Hello! How can I help you today?',
    tags: ['greeting', 'intro'],
  },
  {
    id: '2',
    title: 'Goodbye Prompt',
    prompt: 'Thank you for visiting. Have a great day!',
    tags: ['farewell', 'outro'],
  },
  {
    id: '3',
    title: 'Help Prompt',
    prompt: 'Here are some things you can ask me...',
    tags: ['help', 'info'],
  },
];

export async function fetchPrompts() {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPrompts), 500);
  });
}