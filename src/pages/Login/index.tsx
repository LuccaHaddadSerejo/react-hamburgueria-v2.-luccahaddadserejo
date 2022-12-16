import React from "react";
import { AsideLoginRegister } from "../../components/AsideLoginRegister";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "./formSchema";
import { ButtonForm } from "../../components/ButtonForm";
import { Link } from "react-router-dom";

interface iFormLoginValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLoginValues>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <div>
      <Form noValidate={true}>
        <h2>Login</h2>
        <Input
          id={"userName"}
          type={"email"}
          disabled={false}
          label={"Email"}
          placeholder={"Digite seu email aqui"}
          register={register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <Input
          id={"userPassword"}
          type={"password"}
          disabled={false}
          label={"Senha"}
          placeholder={"Digite sua senha aqui"}
          register={register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <ButtonForm>Logar</ButtonForm>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link to={"/register"}>Cadastrar</Link>
      </Form>
      <AsideLoginRegister />
    </div>
  );
};

export default LoginPage;
