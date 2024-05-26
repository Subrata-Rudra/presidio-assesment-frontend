import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthenticationPage from "./pages/authenticationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
      </Routes>
    </div>
  );
}

export default App;
