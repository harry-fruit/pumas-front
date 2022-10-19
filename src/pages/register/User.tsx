import { StatusCodes } from "http-status-codes";
import _ from "lodash";
import Head from "next/head";
import Router from "next/router";
import { BaseSyntheticEvent, useState } from "react";
import style from "../../styles/register/User.module.css";
import { formData, getVerifiedInputClass, verifyInputedData } from "../../util/Form";

const User = () => {
  const [useValidFields, setValidFields] = useState({
    Email: null,
    Cpf: null,
    Phone: null,
  });

  const [useLastValidatedFields, setLastValidatedFields] = useState({
    Email: "",
    Cpf: "",
    Phone: "",
  });

  const handleSubmit = async (event: BaseSyntheticEvent): Promise<void> => {
    const { Email, Cpf, Phone } = useValidFields;
    event.preventDefault();
    
    if (Email && Cpf && Phone) {
      const data = formData(event.target);
      
      const response = (await fetch("/api/register/user", {
        body: JSON.stringify(data),
        method: "post",
      }));

      if (response.status === StatusCodes.CREATED) {
        Router.push('/auth/Login')
      };

    }
  };

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
            <form onSubmit={handleSubmit}>
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
                    onBlur={(event) => {
                      verifyInputedData(event, [
                        { useValidFields, setValidFields },
                        { useLastValidatedFields, setLastValidatedFields },
                      ]);
                    }}
                    className={getVerifiedInputClass(useValidFields.Email)}
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
                    onBlur={(event) => {
                      verifyInputedData(event, [
                        { useValidFields, setValidFields },
                        { useLastValidatedFields, setLastValidatedFields },
                      ]);
                    }}
                    className={getVerifiedInputClass(useValidFields.Cpf)}
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
                    onBlur={(event) => {
                      verifyInputedData(event, [
                        { useValidFields, setValidFields },
                        { useLastValidatedFields, setLastValidatedFields },
                      ]);
                    }}
                    className={getVerifiedInputClass(useValidFields.Phone)}
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
