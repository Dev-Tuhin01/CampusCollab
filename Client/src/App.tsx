import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Chat from './pages/Chat';
import Notice from './pages/Notice';
import Routine from './pages/Routine';
import User from './pages/User';
import './App.css';

function App() {

  return (
    <div className="flex flex-col-reverse h-screen sm:flex-col overflow-auto">
      <Navbar />
      <Routes> 
       <Route index element={<Chat />}  />
       <Route path="Routine" element={<Routine />}  />
       <Route path="Notice" element={<Notice />}  />
       <Route path="User" element={<User />}  />

      </Routes>
    </div>
  )
}

export default App
