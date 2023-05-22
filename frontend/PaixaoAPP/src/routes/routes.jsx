import { Routes, Route } from "react-router-dom";
import { DashAdm } from "../pages/DashAdm/dashadm";
import { Home } from "../pages/Home/home";
import { Register } from "../pages/Register/register";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route />
      <Route path="/admDashboard" element={<DashAdm />} />
      <Route />
    </Routes>
  );
}
