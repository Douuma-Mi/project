import React from "react";
import ReactDOM from "react-dom";
import Weather from "./weather/Weather";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router";
import LoginForm from "./components/loginform";
import Register from "./Register";

function App() {
 
  return (
    <div className="App">
      <Routes>

        <Route   path="/"  element={<LoginForm />}  />
        <Route   path="/weather"  element={< Weather/>}  />
        <Route   path="/register"  element={<Register/>}  />
      </Routes>
      
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>

, rootElement);
