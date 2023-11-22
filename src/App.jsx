import { NavBar } from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { useSelector } from "react-redux";

function App() {
  const loggedInUser = useSelector((state) => state.users.loggedInUser);

  return (
    <div className="px-5">
      <Toaster position="top-right" containerStyle={{ top: 25 }} />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={
            loggedInUser?.userName ? <ProfilePage /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
