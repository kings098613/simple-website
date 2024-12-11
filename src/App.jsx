import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterSreen from "./screens/RegisterSreen";
import SignInScreen from "./screens/SignInScreen";
import CategoryScreen from "./screens/CategoryScreen";
import Desktop1Screen from "./screens/Desktop1Screen";
import Desktop4Screen from "./screens/Desktop4Screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterSreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signin/register" element={<RegisterSreen />} />
        <Route path="/category" element={<CategoryScreen />} />
        <Route path="/desktop1" element={<Desktop1Screen />} />
        <Route path="/desktop4" element={<Desktop4Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
