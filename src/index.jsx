import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


// ich brauche meinen Einstiegspunkt (HTML ELEMENT ID ROOT) z.b div id  "root" 
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
