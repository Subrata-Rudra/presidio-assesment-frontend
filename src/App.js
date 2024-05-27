import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthenticationPage from "./pages/authenticationPage";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    async function awakenServer() {
      try {
        const url = process.env.REACT_APP_SERVER_URL + "/test";
        const response = await axios.get(url);
        if (response.status === 200) {
          console.log("Server is ready🎉");
        }
      } catch (error) {
        console.error(error);
      }
    }
    awakenServer();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
      </Routes>
    </div>
  );
}

export default App;
