import React, { SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

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

export interface iUserState {
  email: string;
  name: string;
  id: number;
  password?: string;
}

export interface iLoginRegisterResponse {
  accessToken: string;
  user: iUserState;
}

export interface iErrorData {
  data: string;
}

export interface iErrorResponse {
  response: iErrorData;
}

export interface iUserProviderValue {
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<SetStateAction<boolean>>;
  storeLoading: boolean;
  submitRegister: (data: iFormRegisterData) => void;
  submitLogin: (data: iFormLoginData) => void;
  user: iUserState | null;
  logout: () => void;
}

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [storeLoading, setStoreLoading] = useState(true);
  const [user, setUser] = useState<null | iUserState>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
      const id = JSON.parse(localStorage.getItem("@USERID") || "");

      if (!token) {
        setStoreLoading(false);
        return;
      }

      try {
        setStoreLoading(true);
        const response = await api.get<iUserState>(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        navigate(`/store/${response.data.name}/${response.data.id}`);
      } catch (error) {
        const currentError = error as AxiosError<iErrorResponse>;
        toast.error(currentError.response?.data + "");
      } finally {
        setStoreLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userRegister = async (formData: iFormRegisterData) => {
    try {
      setGlobalLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.post<iLoginRegisterResponse>(
        "/users",
        formData
      );
      toast.success("Conta criada com sucesso");
      navigate("/");
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
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
      const response = await api.post<iLoginRegisterResponse>(
        "/login",
        formData
      );
      toast.success(`Seja bem-vindo, ${response.data.user.name}`);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.accessToken));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      setUser(response.data.user);
      navigate(`/store/${response.data.user.name}/${response.data.user.id}`);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitLogin = (data: iFormLoginData) => {
    userLogin(data);
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        globalLoading,
        setGlobalLoading,
        storeLoading,
        submitRegister,
        submitLogin,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
