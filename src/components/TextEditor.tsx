import {useState, FormEvent, useCallback} from 'react';

interface TextEditorProps {
  onConvert: (text: string) => Promise<void>;
  isLoading: boolean;
}

export const TextEditor = ({ onConvert, isLoading }: TextEditorProps) => {
  const [text, setText] = useState('');

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isLoading) return;

    await onConvert(text);
  }, [text, isLoading]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isLoading}
        className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:opacity-50 resize-none"
        placeholder="Введите текст для конвертации..."
      />
      <button
        type="submit"
        disabled={isLoading || !text.trim()}
        className="w-full py-2 px-4 bg-green-500 text-white rounded-lg
                 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-colors duration-200"
      >
        {isLoading ? 'Конвертация...' : 'Конвертировать в PDF'}
      </button>
    </form>
  );
};