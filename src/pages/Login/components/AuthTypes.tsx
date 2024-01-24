// authTypes.tsx
interface User {
    username: string;
    email: string;
    password: string;
    avatar: string;
  }
  
  interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
  }
  
  type AuthAction = { type: "login"; payload: User } | { type: "logout" };
  
  interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    login: (username: string, email: string, password: string) => void;
    logout: () => void;
  }
  