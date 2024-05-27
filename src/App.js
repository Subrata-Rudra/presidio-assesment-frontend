import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthenticationPage from "./pages/authenticationPage";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(async () => {
    try {
      const url = process.env.REACT_APP_SERVER_URL + "/test";
      const response = await axios.get(url);
      if (response.status === 200) {
        alert("Server is ready🎉");
      }
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
      </Routes>
    </div>
  );
}

export default App;
