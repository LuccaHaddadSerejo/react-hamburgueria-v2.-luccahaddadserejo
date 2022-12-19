import React from "react";
import { AsideLoginRegister } from "../../components/AsideLoginRegister";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "./formSchema";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { StyledLink, StyledLoginFull } from "./style";
import { Button } from "../../components/Button";

interface iFormLoginValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { submitLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLoginValues>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledLoginFull>
      <main>
        <AsideLoginRegister />
        <div>
          <Form onSubmit={handleSubmit(submitLogin)} noValidate={true}>
            <h2>Login</h2>
            <Input
              inputVariation={"form"}
              id={"userName"}
              type={"email"}
              disabled={false}
              label={"Email"}
              placeholder={"Digite seu email aqui"}
              register={register("email")}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
            <Input
              inputVariation={"form"}
              id={"userPassword"}
              type={"password"}
              disabled={false}
              label={"Senha"}
              placeholder={"Digite sua senha aqui"}
              register={register("password")}
            />
            {errors.password?.message && <p>{errors.password.message}</p>}
            <div>
              <Button buttonType={"login"} type="submit">
                Logar
              </Button>
            </div>
            <p>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </p>
            <StyledLink to={"/register"}>Cadastrar</StyledLink>
          </Form>
        </div>
      </main>
    </StyledLoginFull>
  );
};

export default LoginPage;
