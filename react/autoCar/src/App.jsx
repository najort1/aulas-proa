import "./App.css";
import Header from "./components/Header/Header";
import Principal from "./components/ConteudoPrincipal/principal";
import ListaDeVeiculos from "./components/ListaDeVeiculos/ListaDeVeiculos";
import { useState, useEffect } from "react";
import LoginPage from "./components/paginaLogin/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaCadastro from "./components/paginaCadastro/PaginaCadastro";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<PaginaCadastro />} />
          <Route path="/painel" element={<ListaDeVeiculos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
