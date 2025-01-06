import { HistoryItem } from '@/types';

const STORAGE_KEY = 'pdfHistory';

export const StorageService = {
  saveHistory: (history: HistoryItem[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  },

  getHistory: (): HistoryItem[] => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  clearHistory: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  }
};