import { AiFillInfoCircle } from 'react-icons/ai';
import FileUpload from '../components/file-upload/FileUpload';

const HomeScreen = ({ onFileAccepted }: any) => {
  return (
    <div>
      <h2>OCR App with Tesseract.js</h2>
      <FileUpload onFileAccepted={onFileAccepted} />
      <div className='info'>
        <AiFillInfoCircle size={20} />
        <p>
          This app uses Tesseract.js to extract text from images. Drop an image
          file to get started.
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
