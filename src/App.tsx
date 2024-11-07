import './App.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  const handleFileSelect = (file: File) => {
    console.log('file', file?.type);
  };
  return (
    <>
      <HomeScreen onFileAccepted={handleFileSelect} />
    </>
  );
}

export default App;
