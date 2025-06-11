import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import { createRoot } from 'react-dom/client'
import { PaymentProvider } from "./utils/PaymentContext"


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<PaymentProvider>
  <App />
</PaymentProvider>
</BrowserRouter>
)