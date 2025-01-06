import { memo, useCallback } from 'react';
import { HistoryItem } from '@/types';
import cn from 'classnames';

interface ConversionHistoryProps {
  history: HistoryItem[];
  onSelectItem: (text: string) => void;
  onClear: () => void;
  isLoading: boolean;
}

export const ConversionHistory = memo(({ history,  onSelectItem,  onClear,  isLoading }: ConversionHistoryProps) => {
  const handleItemClick = useCallback((text: string) => {
    if (!isLoading) {
      onSelectItem(text);
    }
  }, [isLoading, onSelectItem]);

  if (history.length === 0) return null;

  return (
    <div className="mt-8 bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">История конвертаций</h2>
        <button
          onClick={onClear}
          disabled={isLoading}
          className="px-4 py-2 text-sm text-red-600 hover:text-red-700
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors duration-200"
        >
          Очистить
        </button>
      </div>

      <ul className="space-y-3">
        {history.map((item, index) => (
          <li
            key={item.timestamp}
            onClick={() => handleItemClick(item.text)}
            className={cn(
              'p-4 border border-gray-200 rounded-lg transition-all duration-200',
              {
                'cursor-pointer hover:bg-gray-50': !isLoading,
                'cursor-not-allowed opacity-50': isLoading
              }
            )}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800">
                  Документ {index + 1}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(item.timestamp).toLocaleString('ru-RU')}
                </p>
              </div>
              <span className="text-xs text-gray-400 max-w-[200px] truncate">
               {item.text}
             </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

ConversionHistory.displayName = 'ConversionHistory';