import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/cover.css"
import "./assets/sign-in.css"
import "./color-modes.js"
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
)
