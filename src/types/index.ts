export interface HistoryItem {
  text: string;
  timestamp: number;
}

export interface ConversionError {
  message: string;
  code?: string;
}