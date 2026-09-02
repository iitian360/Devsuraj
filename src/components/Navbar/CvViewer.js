// import { Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import React from 'react';
import cvFile from '../../assets/cv/suraj CV.pdf';
// import { pdfjs, Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Configure the workerSrc
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CvViewer = () => {
    
    return (
        <div className="w-full">
            <iframe src={cvFile} width="100%" height="750px" title="CV PDF Viewer"></iframe>
        </div>
    );
};



export default CvViewer;
