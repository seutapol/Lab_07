import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading page...</p>
    </div>
  );
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/settings">Settings</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;