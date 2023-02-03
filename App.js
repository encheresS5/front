import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ListeEncherePage from './pages/ListeEncherePage';
import Login from './pages/Login'
import DetailHistoriquePage from './pages/DetailHistoriquePage';
import HistoriqueEncherePage from './pages/HistoriqueEncherePage';
import FicheEnchere from './pages/FicheEnchere';
import RecherchePage from './pages/RecherchePage';
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/"} element={<ListeEncherePage />}></Route>
          <Route path={"/listeEncheres/:idEnchere"} element={<FicheEnchere />}></Route>
          <Route path={"/historique"} element={<HistoriqueEncherePage />}></Route>
          <Route path={"/detailhistorique/:id"} element={<DetailHistoriquePage />}></Route>
          <Route path={"/recherche"} element={<RecherchePage />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
