import React, { createContext, useContext, useState } from "react";
import { USERS } from "../roles";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(username, password) {
    const found = USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (found) setUser(found);
    return found;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}