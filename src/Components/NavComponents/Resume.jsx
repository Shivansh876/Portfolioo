import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import pdf from "../../Assets/Resume_Shivansh.pdf"
import { useState } from 'react'
import { useEffect } from 'react'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// This needs to be set to avoid issues with loading PDFs from different domains
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {

  const pdfUrl = pdf; // Replace with the actual URL or path to your resume PDF file

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleDownload = () => {
    // Create a temporary link and click it programmatically to initiate the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Shivansh_Resume.pdf'; // Replace with your desired filename for the downloaded PDF
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className='flex flex-col text-white items-center my-20'>
      <button className='flex gap-x-2 button-style mb-20' onClick={handleDownload}>
        <p>Download</p>
        <AiOutlineCloudDownload size={22} />
      </button>

      <div>
        <p className='font-bold text-4xl mb-3'>See my resume here...</p>
      </div>

      <div>
        <div style={{ width: 900 }}>
          <div className='lg:block md:block hidden' style={{ maxWidth: "900px" ,maxHeight: "1250px", overflow: "hidden"}}>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={index} pageNumber={index + 1} width={900} height= {1250} />
              ))}
            </Document>
          </div>
        </div>
      </div>

      <button className='flex gap-x-2 button-style mt-20' onClick={handleDownload}>
        <p>Download</p>
        <AiOutlineCloudDownload size={22} />
      </button>
    </div>
  )
}

export default Resume