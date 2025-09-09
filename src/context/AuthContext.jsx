import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const getInitialUser = () => {
  try {
    const storedUser = localStorage.getItem('asklat_user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
  } catch (error) {
    console.error("Failed to parse user from localStorage", error);
  }
  return null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('asklat_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('asklat_user');
      }
    } catch (error) {
      console.error("Failed to save user to localStorage", error);
    }
  }, [user]);

  const login = (email, password) => {
    // Mock login logic
    console.log("Logging in with", email, password);
    const mockUser = {
      id: 1,
      name: 'المستخدم التجريبي',
      email: email,
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${email}`
    };
    setUser(mockUser);
    return mockUser;
  };

  const register = (name, email, password) => {
    // Mock register logic
    console.log("Registering with", name, email, password);
    const mockUser = {
      id: Date.now(),
      name: name,
      email: email,
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${email}`
    };
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};