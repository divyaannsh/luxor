import { useEffect, useState } from 'react';
// import pdfFile from './00 Luxor Catalogue 2022 LowRes.pdf'

import { Document, Page ,pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = '/assets/pdf.worker.js';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// //     'pdfjs-dist/legacy/build/pdf.worker.min.js',
// //        import.meta.url,
// //      ).toString();
     
export default function MyApp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(  numPages  ){

     setNumPages(numPages);
  }



  useEffect(()=>{

    // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
} ,[])


  return (
    <div>
      <Document file={"./Luxor Catalogue.pdf"} 
         onLoadSuccess={onDocumentLoadSuccess}  >
        {/* {Array(numPages).fill().map((_,i)=>{
            <Page pageNumber={i+1} />
              
        })} */}

        <p>
        Page {pageNumber} of {numPages}
      </p>
      
      </Document>
      <p>
          Page {pageNumber} of {numPages}
      </p>
    </div>
  );

 }