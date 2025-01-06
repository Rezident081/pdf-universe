import { useState, useEffect, useCallback } from 'react';
import { ConversionHistory, PdfViewer, TextEditor } from '@/components';
import { PdfService } from '@/services/api';
import { StorageService } from '@/utils/storage';
import { type HistoryItem } from '@/types';

const App = () => {
  const [currentPdfBlob, setCurrentPdfBlob] = useState<Blob | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setHistory(StorageService.getHistory());
  }, []);

  const handleConvert = useCallback(async (text: string) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const pdfBlob = await PdfService.convert(text);

      const newHistoryItem: HistoryItem = {
        text,
        timestamp: Date.now()
      };

      const updatedHistory = [...history, newHistoryItem];
      setHistory(updatedHistory);
      StorageService.saveHistory(updatedHistory);
      setCurrentPdfBlob(pdfBlob);
    } catch (error) {
      console.error('Conversion failed:', error);
      alert('Ошибка при конвертации документа');
    } finally {
      setIsLoading(false);
    }
  }, [history, isLoading]);

  const handleHistorySelect = useCallback(async (text: string) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const pdfBlob = await PdfService.convert(text);
      setCurrentPdfBlob(pdfBlob);
    } catch (error) {
      console.error('History conversion failed:', error);
      alert('Ошибка при конвертации документа из истории');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const handleClearHistory = useCallback(() => {
    setHistory([]);
    setCurrentPdfBlob(null);
    StorageService.clearHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Конвертер текста в PDF
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <TextEditor
                onConvert={handleConvert}
                isLoading={isLoading}
              />
            </div>
            <ConversionHistory
              history={history}
              onSelectItem={handleHistorySelect}
              onClear={handleClearHistory}
              isLoading={isLoading}
            />
          </div>
          <div className="sticky top-8 h-screen">
            <PdfViewer pdfBlob={currentPdfBlob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;