import { Routes, Route } from "react-router-dom";
import "./App.css";
import Candidate from "./pages/candidate/CandidatePage";
import Login from "./pages/login/Login";
import MainLayout from "./styles/layout/MainLayout";
import ButtonAppBar from "./component/Navbar";
import CanddiateSecondStepForm from "./pages/candidate/CandidateSecondStepForm";

const App = () => {
  return (
    <MainLayout Navbar={ButtonAppBar}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/candidate">
          {/* Nested routes */}
          <Route path="register" element={<Candidate />} />
          <Route
            path="second_step_register"
            element={<CanddiateSecondStepForm />}
          />
        </Route>
      </Routes>
    </MainLayout>
  );
};

export default App;
