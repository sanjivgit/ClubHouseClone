import logo from './logo.svg';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhoneConformation from './pages/PhoneConformation';
import './App.css';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import Home from "./pages/Home";
import AppLayout from './pages/Layouts/AppLayout';
import Explore from './pages/Explore';
import Profile from "../src/pages/Profile";

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes> 
          <Route path="/" element={<Welcome/>} />
          <Route path="/invite" element={<PhoneConformation/>} />
          <Route path="/code_confirm" element={<CodeConfirm/>} />
          <Route path="allow_notification" element={<AllowNotification/>} />
        </Routes>
      </PlanLayout>
      <AppLayout>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
