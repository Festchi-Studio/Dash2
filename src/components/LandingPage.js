import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LandingPage() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Dashboard App</h1>
      {user ? (
        <>
          <p>Logged in as: <b>{user.username}</b> ({user.role})</p>
          <Link to="/dashboard">Go to Dashboard</Link>
          <br />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}