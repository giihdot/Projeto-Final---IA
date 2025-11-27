import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar";
import Apresentacao from "./pages/Apresentacao";
import Professora from "./pages/SobreProfessora";
import Calendario from "./pages/Calendario";
import Depoimentos from "./pages/Depoimentos";
import Colaboradoras from "./pages/SobreNos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/professora" element={<Professora />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/asgatitas" element={<Colaboradoras />} />
      </Routes>
    </BrowserRouter>
  );
}




