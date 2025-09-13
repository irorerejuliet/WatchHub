import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ShopContextProvider from './Components/context/ShopContext.jsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ShopContextProvider>
);
