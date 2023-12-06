import React from 'react'                             // IMPORT REACT LIBRARY  
import ReactDOM from 'react-dom/client'               // IMPORT ReactDOM PACKAGE
import App from './App.jsx'                           // IMPORT MAIN APP COMPONENT FROM APP.JSX
import './index.css'                                  // IMPORT GLOBAL CSS STYLES FOR ENTIRE APP

ReactDOM.createRoot(document.getElementById('root')).render(    // FIND DOM ELEMENT WITH ID ROOT
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)