import { useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iFormRegisterData {
  name: string;
  email: string;
  password: string;
  confirm_password?: string;
}

export interface iFormLoginData {
  email: string;
  password: string;
}

export interface iUserProviderValue {
  globalLoading: boolean;
  submitRegister: (data: iFormRegisterData) => void;
  submitLogin: (data: iFormLoginData) => void;
  user: null | iUserStateValue;
  logout: () => void;
}

export interface iUserStateValue {
  email: string;
  name: string;
  id: number;
}

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userRegister = async (formData: iFormRegisterData) => {
    try {
      setGlobalLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.post("/users", formData);
      toast.success(
        "Conta criada com sucesso, você será redirecionado para o login em instantes"
      );
      navigate("/");
    } catch (error) {
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitRegister = (data: iFormRegisterData) => {
    const { name, email, password } = data;
    const newData = {
      name: name,
      email: email,
      password: password,
    };
    userRegister(newData);
  };

  const userLogin = async (formData: iFormLoginData) => {
    try {
      setGlobalLoading(true);
      const response = await api.post("/login", formData);
      toast.success(
        "Login efetuado com sucesso, você será redirecionado para o Store em instantes"
      );
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.accessToken));
      setUser(response.data.user);
      navigate(`/store/${response.data.user.name}/${response.data.user.id}`);
    } catch (error) {
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitLogin = (data: iFormLoginData) => {
    userLogin(data);
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, globalLoading, submitRegister, submitLogin, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
