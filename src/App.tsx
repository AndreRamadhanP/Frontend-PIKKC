import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardTemplate from "./containers/templates/Dashboard/indeks";
import Auth from "./containers/templates/Login/Auth";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardTemplate />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/home" element={<Auth />} />
      <Route path="/riset" element={<Auth />} />
    </Routes>
  );
}

export default App;
