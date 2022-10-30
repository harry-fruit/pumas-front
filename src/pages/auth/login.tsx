import { Alert } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import style from "../../styles/auth/Login.module.css";
import { formData } from "../../util/Form";

const Login = () => {
    const [useValidLogin, setValidLogin] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = formData(event.target);

    const response = await (await fetch("/api/auth/login", {
      body: JSON.stringify(data),
      method: "post",
    })).json();

    if (!response.error) {
      Router.push("/catalog");
    } else {
      setValidLogin(false)
    }

  };

  return (
    <>
      <Head>
        <title>Entrar</title>
      </Head>
      <div id={style.container}>
        <div className={style.drinksBackground} />

        <div id={style.principal}>
        {!useValidLogin && (
          <Alert severity="error">E-mail ou senha incorreto!</Alert>
        )}
          <div className={style.logo} />

          <button className={style.botaoParceiro}>
            <b>Seja um parceiro da Puma&apos;s Delivery</b>
          </button>

          <h2>
            Entrar na conta <br /> com e-mail e senha
          </h2>

          <form
            // action={`/api/auth/login`}
            method="post"
            onSubmit={(event) => {
              onSubmit(event);
            }}
          >
            <input type="text" name="Email" placeholder="Email" required />
            <input
              type="password"
              name="Password"
              placeholder="Senha"
              required
            />
            <button type="submit" className={`btn btnCustom`}>
              Entrar
            </button>
          </form>

          <div className={style.recuperacao}>
            <p>
              <a href="#">Esqueci a senha</a>
            </p>
            <p>
              <a href="#">Quero criar uma conta</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
