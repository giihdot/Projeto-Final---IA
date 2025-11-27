import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apresentacao from "./pages/Apresentacao";
import Professora from "./pages/Professora";
import Calendario from "./pages/Calendario";
import Depoimentos from "./pages/Depoimentos";
import Colabore from "./pages/Colabore";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/professora" element={<Professora />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/colabore" element={<Colabore />} />
      </Routes>
    </BrowserRouter>
  );
}
