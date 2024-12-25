import { Routes, Route } from "react-router-dom";
import "./App.css";
import Candidate from "./pages/candidate/CandidatePage";
import Login from "./pages/login/Login";
import MainLayout from "./styles/layout/MainLayout";
import ButtonAppBar from "./component/Navbar";

const App = () => {
  return (
    <MainLayout Navbar={ButtonAppBar}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/candidate" element={<Candidate />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
