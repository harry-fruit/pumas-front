import { StatusCodes } from "http-status-codes";
import Head from "next/head";
import Router from "next/router";
import { BaseSyntheticEvent, useState } from "react";
import style from "../../styles/register/User.module.css";
import { formData } from "../../util/FormData";

const User = () => {
  const [useValidFields, setValidFields] = useState({
    Email: false,
    Cpf: false,
    Phone: false,
  });

  const [useLastValidatedFields, setLastValidatedFields] = useState({
    Email: "",
    Cpf: "",
    Phone: "",
  });

  const verifyInputedData = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const element = event.target;
    if (
        element.value
        && element.value != useLastValidatedFields[element.name]
      )
     {
      const result = await (
        await fetch(`/api/validate/user?${element.name}=${element.value}`)
      ).json();

      setValidFields({
        ...useValidFields,
        [element.name]: result.isValid,
      });

      setLastValidatedFields({
        ...useLastValidatedFields,
        [element.name]: element.value,
      });

      if (!result.isValid) {
        element.setCustomValidity(`${element.name} já está em uso.`);
        element.reportValidity();
      } else {
        element.setCustomValidity('');
        element.reportValidity();
      }
    } else {
      if (!useValidFields[element.name]) {
        element.setCustomValidity(`${element.name} já está em uso.`);
        element.reportValidity();
      }
    }
  };

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    const { Email, Cpf, Phone } = useValidFields;
    event.preventDefault();
    
    console.log(Email)
    console.log(Cpf)
    console.log(Phone)
    
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
                    onBlur={verifyInputedData}
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
                    onBlur={verifyInputedData}
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
                    onBlur={verifyInputedData}
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
