import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc =
  '../../node_modules/pdfjs-dist/build/pdf.worker.mjs';

const pdfToImages = async (pdf: string): Promise<string[]> => {
  const output = [];
  const doc = await pdfjsLib.getDocument(pdf).promise;

  for (let i = 1; i < doc.numPages + 1; i++) {
    const canvas = document.createElement('canvas');

    const page = await doc.getPage(i);
    const context = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: 2 });
    // const viewport = page.getViewport({ scale: 1.5 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context as any,
      viewport,
    }).promise;

    output.push(canvas.toDataURL('image/png'));
  }

  return output;
};

export default pdfToImages;
