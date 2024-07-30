import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ReactPDF from '@react-pdf/renderer';
import Invoice from './components/reports/Invoice.js';
import invoice from './data/invoice';

// export function render() {
//   const html = ReactDOMServer.renderToString(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
//   return { html }
// }

function createPDF() {
  

ReactPDF.render(<Invoice invoice={invoice}/>, `example.pdf`);

}

createPDF();
