import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Suporte from "./routes/Suporte";
import Error from "./routes/Error";
import Produto from "./routes/Produto";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
 
function App() {
  return (
    <Browser>
      <div className="min-h-screen flex flex-col">
        <Header/>
 
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
 
        <Footer />
      </div>
    </Browser>
  );
}
 
export default App;
