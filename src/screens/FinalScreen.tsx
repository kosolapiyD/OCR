const FinalScreen = ({ ocrResponse, onHomeClick }: any) => {
  const keys = Object.keys(ocrResponse);
  const values = keys.map((key) => ocrResponse[key].replace(/\n/g, '<br>'));

  return (
    <div className='ocrResultsContainer'>
      <h2>The OCR results</h2>
      <div
        className='ocrResultsBox'
        dangerouslySetInnerHTML={{ __html: values }}
      />
      <button className='homeScreenBtn' onClick={onHomeClick}>
        Home Screen
      </button>
    </div>
  );
};

export default FinalScreen;
