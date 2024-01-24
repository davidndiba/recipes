// AuthProvider.tsx
import React, { createContext, useContext, useReducer, FC, ReactNode } from "react";

// Import your types
// import { AuthAction, AuthState, AuthContextProps } from "./AuthTypes";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const FAKE_USER = {
  username: "John",
  email: "johndoe@gmail.com",
  password: "password",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("Invalid action type!");
  }
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);

  function login(username: string, email: string, password: string) {
    if (
      username === FAKE_USER.username &&
      email === FAKE_USER.email &&
      password === FAKE_USER.password
    ) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      alert("Wrong user info!");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  const contextValue: AuthContextProps = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
