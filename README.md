
# PDF Text Converter
React приложение для конвертации текста в PDF формат с использованием серверного API.
## Технологии

- React
- TypeScript 
- Vite
- Tailwind CSS
- Axios
- Vitest для тестирования

## Установка

```bash
git clone https://github.com/Rezident081/pdf-universe
cd react-test-pdf
npm install
```

## Конфигурация

Создайте `.env` файл в корне проекта:

```env
VITE_API_KEY=78684310-850d-427a-8432-4a6487f6dbc4
VITE_API_URL=http://95.217.134.12:4010/create-pdf
```

## Запуск

```bash
npm run dev
```

Откройте http://localhost:3000

## Тестирование

```bash
npm run test
```

## Сборка

```bash
npm run build
```

## Структура проекта

```
src/
  ├── components/          # React компоненты
  │   ├── Pdf/            
  │   │   ├── PdfViewer.tsx
  │   │   └── PdfPlaceholder.tsx
  │   ├── ConversionHistory.tsx
  │   ├── index.tsx 
  │   └── TextEditor.tsx
  ├── resources/
  │   └── css             # Стили          
  ├── services/           # API сервисы
  │   └── api.ts
  ├── utils/              # Утилиты
  │   └── storage.ts
  ├── types/              # TypeScript типы
  │   └── index.ts
  └── __tests__/          # Тесты
```

## API

Приложение использует внешний API для конвертации:
```
POST http://95.217.134.12:4010/create-pdf
```

## Функционал

- Конвертация текста в PDF
- История конвертаций
- Предпросмотр PDF
- Хранение истории в localStorage
```