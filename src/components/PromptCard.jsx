import { Copy } from 'lucide-react';

const PromptCard = ({ prompt }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.Prompt || '');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{prompt.Title || 'Untitled'}</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {Array.isArray(prompt.Tags) && prompt.Tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mb-2 text-sm text-gray-600">
        <span className="font-semibold">Category:</span> {prompt.Category || 'N/A'}
      </div>
      {prompt.Notes && (
        <div className="mb-2 text-sm text-gray-600">
          <span className="font-semibold">Notes:</span> {prompt.Notes}
        </div>
      )}
      <pre className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap mb-4">
        {prompt.Prompt || ''}
      </pre>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <Copy size={16} />
        Copy
      </button>
    </div>
  );
};

export default PromptCard; 