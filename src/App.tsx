import { useEffect, useState } from 'react';
import './App.css';
import OCRImages from './lib/OCRImages';
import HomeScreen from './screens/HomeScreen';
import ProcessScreen from './screens/ProcessScreen';
import FinalScreen from './screens/FinalScreen';
import pdfToImages from './lib/pdfToImages';

function App() {
  const [progress, setProgress] = useState('start');
  const [ocrResponse, setOcrResponse] = useState<Record<string, string>>({});

  useEffect(() => {
    // check if ocrResponse is not empty object
    if (Object.keys(ocrResponse).length) {
      setProgress('done');
    }
  }, [ocrResponse]);

  // console.log('ocrResponse', ocrResponse);
  // console.log('progress', progress);

  const handleFileSelect = (file: File) => {
    if (!file) return;
    setProgress('recognizing');
    const fileType = file?.type;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const fileDataUri: any = reader.result;
      if (fileType?.includes('image')) {
        const ocrResponse = await OCRImages([fileDataUri]);
        if (ocrResponse) {
          setOcrResponse(ocrResponse);
        }
      } else if (fileType?.includes('pdf')) {
        const pdfImages = await pdfToImages(fileDataUri);
        const ocrResponse = await OCRImages(pdfImages);
        if (ocrResponse) {
          setOcrResponse(ocrResponse);
        }
      } else {
        console.log('Invalid file type');
      }
    };
    reader.readAsDataURL(file);
  };

  if (progress === 'start') {
    return <HomeScreen onFileAccepted={handleFileSelect} />;
  }

  if (progress === 'recognizing') {
    return <ProcessScreen />;
  }

  return (
    <FinalScreen
      ocrResponse={ocrResponse}
      onHomeClick={() => {
        setProgress('start');
        setOcrResponse({});
      }}
    />
  );
}

export default App;
