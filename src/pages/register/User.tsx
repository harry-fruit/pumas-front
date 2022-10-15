import Head from "next/head";
import { useState } from "react";
import style from "../../styles/register/User.module.css";

const User = () => {

    return (
    <>
      <Head>
        <title>Cadastro de Usuário</title>
      </Head>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.formImage}>
            <div className={style.imagemPrincipal} />
          </div>
          <div className={style.formContainer}>
            <div className={style.formHeader}>
              <div className={style.loginButton}>
                <button className={`btn btnCustom`}>Entrar</button>
              </div>
            </div>
            <form action={"/api/register/User"} method="post">
              <div className={style.title}>
                <h1>Cadastre-se</h1>
              </div>
              <div className={style.inputGroup}>
                <div className={style.inputBox}>
                  <label htmlFor="FirstName">Primeiro Nome</label>
                  <input
                    id="FirstName"
                    type="text"
                    name="FirstName"
                    placeholder="Digite seu primeiro nome"
                    required
                    maxLength={50}
                  />
                </div>

                <div className={style.inputBox}>
                  <label htmlFor="LastName">Sobrenome</label>
                  <input
                    id="LastName"
                    type="text"
                    name="LastName"
                    placeholder="Digite seu sobrenome"
                    required
                    maxLength={50}
                  />
                </div>

                <div className={style.inputBox}>
                  <label htmlFor="Email">E-mail</label>
                  <input
                    id="Email"
                    type="Email"
                    name="Email"
                    placeholder="Digite seu e-mail"
                    required
                    maxLength={150}
                  />
                </div>

                <div className={style.inputBox}>
                  <label htmlFor="CPF">CPF</label>
                  <input
                    id="CPF"
                    type="text"
                    name="Cpf"
                    placeholder="Digite seu CPF"
                    required
                    maxLength={15}
                  />
                </div>

                <div className={style.inputBox}>
                  <label htmlFor="Gender">Gênero</label>
                  <select name="Gender" id="Gender">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Transgenero">Transgenero</option>
                    <option value="Genero Neutro">Genero Neutro</option>
                    <option value="Nao Binario">Nao Binario</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div className={style.inputBox}>
                  <label htmlFor="Phone">Celular</label>
                  <input
                    id="Phone"
                    type="tel"
                    name="Phone"
                    placeholder="(xx) xxxx-xxxx"
                    required
                    maxLength={15}
                  />
                </div>

                <div className={style.inputBox}>
                  <label htmlFor="Password">Senha</label>
                  <input
                    id="Password"
                    type="Password"
                    name="Password"
                    placeholder="Digite sua senha"
                    required
                    maxLength={255}
                  />
                </div>

                <div className={style.inputBox}>
                  <label htmlFor="ConfirmPassword">Confirme sua Senha</label>
                  <input
                    id="ConfirmPassword"
                    type="password"
                    name="ConfirmPassword"
                    placeholder="Digite sua senha novamente"
                    required
                    maxLength={255}
                  />
                </div>
              </div>
              <button
                className={`btn btnCustom ${style.continueButton}`}
                type="submit"
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default User;
