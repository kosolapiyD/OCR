import { createWorker, createScheduler } from 'tesseract.js';

const OCRImages = async (imagesData: string[], options?: any) => {
  if (!imagesData) return;

  console.log('imagesData', imagesData);
  const worker = await createWorker(['eng', 'heb'], 1, {
    logger: (m) => {
      // console.log('m', m.progress);
    },
  });

  const promises = imagesData.map(async (image) => {
    const {
      data: { text },
    } = await worker.recognize(image);
    return text;
  });

  const texts = await Promise.all(promises);
  return texts.reduce((acc, text, index) => {
    return { ...acc, [index + 1]: text };
  }, {});
};

export default OCRImages;
