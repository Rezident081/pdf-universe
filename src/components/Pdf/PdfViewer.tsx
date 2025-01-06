import { memo, useEffect, useState } from 'react';
import {PdfPlaceholder} from "@/components/Pdf/PdfPlaceholder.tsx";

interface PdfViewerProps {
  pdfBlob: Blob | null;
}

export const PdfViewer = memo(function({ pdfBlob }: PdfViewerProps) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (pdfBlob) {
      const newUrl = URL.createObjectURL(pdfBlob);

      setUrl(newUrl);
      return () => URL.revokeObjectURL(newUrl);
    }
    setUrl(null);
  }, [pdfBlob]);

  return (
    url ? (<div className="h-screen bg-white rounded-lg shadow-lg overflow-hidden">
      <iframe
        src={url}
        className="w-full h-full border-0"
        title="PDF Viewer"
      />
    </div>) : <PdfPlaceholder />
  );
});