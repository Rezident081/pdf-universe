import axios from 'axios';
import { ConversionError } from '@/types';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  params: {
    apiKey: API_KEY
  },
});

export const PdfService = {
  convert: async (text: string): Promise<Blob> => {
    try {
      const { data } = await api.post('', { text }, {
        responseType: 'blob',
      });
      return data;
    } catch (error) {
      const axiosError = error as ConversionError;
      throw new Error(`Conversion error: ${axiosError.message}`);
    }
  }
};