import { AiFillInfoCircle } from 'react-icons/ai';
import FileUpload from '../components/file-upload/FileUpload';

import './HomeScreen.css';

const HomeScreen = ({ onFileAccepted }: any) => {
  return (
    <div className='homeContainer'>
      <div className='info'>
        <h2>OCR App with Tesseract.js</h2>
        <div className='paragraph'>
          <p>This app uses Tesseract.js to extract text from images.</p>
          <AiFillInfoCircle size={20} />
        </div>
      </div>

      <FileUpload onFileAccepted={onFileAccepted} />
    </div>
  );
};

export default HomeScreen;
