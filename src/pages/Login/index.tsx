import React from "react";
import ellipses from "../../assets/img/ellipseContainer.svg";
import { AsideLoginRegister } from "../../components/AsideLoginRegister";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "./formSchema";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { StyledError, StyledLink, StyledLoginFull } from "./style";
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
        <section>
          <AsideLoginRegister />
          <img src={ellipses} alt="Ellipses container" />
        </section>
        <section>
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
            {errors.email?.message && (
              <StyledError>{errors.email.message}</StyledError>
            )}
            <Input
              inputVariation={"form"}
              id={"userPassword"}
              type={"password"}
              disabled={false}
              label={"Senha"}
              placeholder={"Digite sua senha aqui"}
              register={register("password")}
            />
            {errors.password?.message && (
              <StyledError>{errors.password.message}</StyledError>
            )}
            <div>
              <Button buttonVariation={"login"} type="submit">
                Logar
              </Button>
            </div>
            <p>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </p>
            <StyledLink to={"/register"}>Cadastrar</StyledLink>
          </Form>
        </section>
      </main>
    </StyledLoginFull>
  );
};

export default LoginPage;
