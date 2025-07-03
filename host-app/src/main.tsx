// main.tsx (host app)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; 

const root = ReactDOM.createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>

    {/* Component หลักจาก React Router ที่ทำหน้าที่เป็นตัวจัดการเส้นทาง (routing) ของแอป React */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
