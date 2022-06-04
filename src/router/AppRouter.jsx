import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import ListClient from "../pages/ListClient";

const AppRouter = () => {
  return (
    <div>
      <Router>
      <Header/>
        <div>
        <Routes>
          <Route path="/" element={ <Home/>} exact />
          <Route path="/client" element={ <ListClient/>} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
