import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchPrompts } from './services/notion';
import PromptCard from './components/PromptCard';

function App() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPrompts()
      .then(data => {
        console.log('Fetched prompts:', data);
        setPrompts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>PromptForge</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
