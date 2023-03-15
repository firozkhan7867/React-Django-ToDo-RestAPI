import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Home from "./components/Home/Home";
import CreateTodo from "./components/Todo/CreateTodo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
