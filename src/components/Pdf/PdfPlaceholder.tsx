export const PdfPlaceholder = () => {
  return (
    <div className="h-screen bg-white rounded-lg shadow-lg flex items-center justify-center">
      <div className="text-center text-gray-500">
        <svg className="h-20 w-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <p className="text-lg">PDF документ появится здесь</p>
      </div>
    </div>
  );
};