// src/services/notion.js

export async function fetchPrompts() {
  const response = await fetch('http://localhost:3001/api/prompts');
  if (!response.ok) {
    throw new Error('Failed to fetch prompts');
  }
  const data = await response.json();
  return data;
}



