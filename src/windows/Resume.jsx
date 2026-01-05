import WindowWrapper from "../hoc/WindowWrapper"
import WindowControls from '#components/WindowControls'
import { Download } from "lucide-react"
import { Document, Page, pdfjs } from "react-pdf"
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { useEffect, useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [pageWidth, setPageWidth] = useState(600);

  useEffect(() => {
    const updateWidth = () => {
      // On mobile, use viewport width minus padding
      if (window.innerWidth < 768) {
        setPageWidth(window.innerWidth - 32);
      } else {
        setPageWidth(600);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <>
    <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a href="/files/resume.pdf" download className="cursor-pointer touch-target flex items-center justify-center" title="Download Resume">
        <Download className="icon" size={18} />
        </a>
    </div>
    <div className="overflow-auto" style={{ maxHeight: 'calc(100dvh - 60px)' }}>
      <Document file="/files/resume.pdf" className="flex justify-center">
        <Page 
          pageNumber={1}
          width={pageWidth}
          renderTextLayer 
          renderAnnotationLayer 
        />
      </Document>
    </div>
    </>
  )
}


const ResumeWindow = WindowWrapper(Resume, 'resume');
export default ResumeWindow

