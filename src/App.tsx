import './App.css';
import OCRImages from './lib/OCRImages';
import HomeScreen from './screens/HomeScreen';

function App() {
  const handleFileSelect = (file: File) => {
    if (!file) return;

    const fileType = file?.type;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const fileDataUri: any = reader.result;
      console.log('fileDataUri => ', fileDataUri);
      if (fileType?.includes('image')) {
        const ocrResponse = await OCRImages([fileDataUri]);
        console.log('ocrResponse', ocrResponse);
      } else if (fileType?.includes('pdf')) {
        // console.log('file', file);
      } else {
        console.log('Invalid file type');
      }
    };
    reader.readAsDataURL(file);
  };
  return <HomeScreen onFileAccepted={handleFileSelect} />;
}

export default App;
