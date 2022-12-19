import React from "react";
import { AsideLoginRegister } from "../../components/AsideLoginRegister";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "./formSchema";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { Button } from "../../components/Button";
import { StyledDiv, StyledLink, StyledRegisterFull } from "./style";

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
    <StyledRegisterFull>
      <main>
        <section>
          <AsideLoginRegister />
        </section>
        <section>
          <Form onSubmit={handleSubmit(submitRegister)} noValidate={true}>
            <StyledDiv>
              <h2>Cadastro</h2>
              <StyledLink to={"/"}>Retornar para o login</StyledLink>
            </StyledDiv>
            <Input
              inputVariation={"form"}
              id={"userRegisterName"}
              type={"text"}
              disabled={false}
              label={"Nome"}
              placeholder={"Digite seu nome"}
              register={register("name")}
            />
            {errors.name?.message && <p>{errors.name.message}</p>}
            <Input
              inputVariation={"form"}
              id={"userRegisterEmail"}
              type={"email"}
              disabled={false}
              label={"Email"}
              placeholder={"Digite seu email"}
              register={register("email")}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
            <Input
              inputVariation={"form"}
              id={"userRegisterPassword"}
              type={"password"}
              disabled={false}
              label={"Senha"}
              placeholder={"Digite sua senha"}
              register={register("password")}
            />
            {errors.password?.message && <p>{errors.password.message}</p>}
            <Input
              inputVariation={"form"}
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
            <Button buttonType="register" type="submit">
              Cadastrar
            </Button>
          </Form>
        </section>
      </main>
    </StyledRegisterFull>
  );
};

export default RegisterPage;
