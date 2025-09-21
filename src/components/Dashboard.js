import React from "react";
import { useAuth } from "../context/AuthContext";
import { ROLES } from "../roles";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <p>Your role: {user.role}</p>
      <ul>
        {user.role === ROLES.PRODUCT_OWNER && <li>Product Owner tools here...</li>}
        {user.role === ROLES.TEAM_LEAD && <li>Team Lead tools here...</li>}
        {user.role === ROLES.PROJECT_MANAGER && <li>Project Manager tools here...</li>}
        {user.role === ROLES.ENGINEERING_MANAGER && <li>Engineering Manager tools here...</li>}
      </ul>
    </div>
  );
}