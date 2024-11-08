import { createRoot } from "react-dom/client";
import LandingPage from "./LandingPage";
import Cadastro from "./components/Cadastro/Cadastro";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EscolhaDePerfil from "./components/EscolhadePerfil/EscolhaDePerfil";
import Premium from "./components/Premium/Premium";
import Login from "./components/Login/Login";
import Cargo from "./components/Cargo/Cargo";
import CargoEstudante from "./components/CargoEstudante/CargoEstudante";
import Bio from "./components/Bio/Bio";
import Tags from "./components/tags/tags";
import FimJornada from "./components/FimJornada/FimJornada";
import Armario from "../Armario";
// import Home from "./components/Home/Home";
import Ranking from "./components/Home/Ranking";
import Feed from "./components/Home/Feed";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Armario />}>
        <Route index element={<LandingPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-choice" element={<EscolhaDePerfil />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/cargo" element={<Cargo />} />
        <Route path="/estudante" element={<CargoEstudante />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/tag" element={<Tags />} />
        <Route path="/end" element={<FimJornada />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/Feed" element={<Feed />} />
      </Route>
    </Routes>
  </Router>
);
