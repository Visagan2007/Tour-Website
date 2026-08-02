import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap-icons/font/bootstrap-icons.css';

import '@fontsource-variable/playfair-display/wght.css';
import '@fontsource/pacifico';
import '@fontsource-variable/roboto-slab/wght.css';
import '@fontsource-variable/caveat/wght.css';
import '@fontsource-variable/playfair/wght.css';
import '@fontsource-variable/orbitron/wght.css';
import '@fontsource-variable/dancing-script/wght.css';
import '@fontsource/rubik-dirt';
import '@fontsource/kalam';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
