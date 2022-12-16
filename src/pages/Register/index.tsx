import React from "react";
import { AsideLoginRegister } from "../../components/AsideLoginRegister";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "./formSchema";
import { ButtonForm } from "../../components/ButtonForm";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";

interface iFormRegisterValues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const RegisterPage = () => {
  const { submitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterValues>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <div>
      <Form onSubmit={handleSubmit(submitRegister)} noValidate={true}>
        <div>
          <h2>Cadastro</h2>
          <Link to={"/"}>Retornar para o login</Link>
        </div>
        <Input
          id={"userRegisterName"}
          type={"text"}
          disabled={false}
          label={"Nome"}
          placeholder={"Digite seu nome"}
          register={register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <Input
          id={"userRegisterEmail"}
          type={"email"}
          disabled={false}
          label={"Email"}
          placeholder={"Digite seu email"}
          register={register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <Input
          id={"userRegisterPassword"}
          type={"password"}
          disabled={false}
          label={"Senha"}
          placeholder={"Digite sua senha"}
          register={register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <Input
          id={"userRegisterConfirmEmail"}
          type={"password"}
          disabled={false}
          label={"Confirmar senha"}
          placeholder={"Digite sua senha novamente"}
          register={register("confirm_password")}
        />
        {errors.confirm_password?.message && (
          <p>{errors.confirm_password.message}</p>
        )}
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </Form>
      <AsideLoginRegister />
    </div>
  );
};

export default RegisterPage;
