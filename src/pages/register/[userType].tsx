import { Alert } from "@mui/material";
import { StatusCodes } from "http-status-codes";
import _ from "lodash";
import Head from "next/head";
import Router from "next/router";
import { BaseSyntheticEvent, useState } from "react";
import style from "../../styles/register/User.module.css";
import { UserTypes } from "../../util/Defines";
import {
  formData,
  getVerifiedInputClass,
  verifyInputedData,
} from "../../util/Form";

export async function getServerSideProps(context) {
  const { userType } = context.params;

  return {
    props: {
      userType,
    },
  };
}

const User = ({ userType }) => {
  const [useValidFields, setValidFields] = useState({
    Email: null,
    Cpf: null,
    Phone: null,
    Cnpj: null,
    SocialReason: null,
    ComercialName: null,
    Cnh: null,
  });

  const [useLastValidatedFields, setLastValidatedFields] = useState({
    Email: "",
    Cpf: "",
    Phone: "",
    Cnpj: "",
    SocialReason: "",
    ComercialName: "",
    Cnh: "",
  });

  const [usePasswordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = async (event: BaseSyntheticEvent): Promise<void> => {
    const { Email, Cpf, Phone, Cnpj } = useValidFields;
    event.preventDefault();

    if (
      ((userType != UserTypes.STORE && Cpf) ||
        (userType === UserTypes.STORE && Cnpj)) &&
      Email &&
      Phone
    ) {
      const data = {
        UserType: userType.toUpperCase(),
        ...formData(event.target)
      };

      const response = await fetch("/api/register/user", {
        body: JSON.stringify(data),
        method: "post",
      });

      if (response.status === StatusCodes.CREATED) {
        Router.push("/auth/login");
      } else if (response.status === StatusCodes.BAD_REQUEST) {
        setPasswordMatch(false)
      }
    }
  };

  return (
    <>
      <Head>
        <title>Cadastro de Usuário</title>
      </Head>
      <main className={style.main}>
        {
          !usePasswordMatch &&
          <Alert severity="error">As senhas não batem!</Alert>
        }
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
                {(userType === UserTypes.CONSUMER ||
                  userType === UserTypes.MOTOBOY) && (
                    <>
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
                    </>
                  )}

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
                  <label
                    htmlFor={userType === UserTypes.STORE ? "CNPJ" : "CPF"}
                  >
                    {userType === UserTypes.STORE ? "CNPJ" : "CPF"}
                  </label>
                  <input
                    id={userType === UserTypes.STORE ? "CNPJ" : "CPF"}
                    type="text"
                    name={userType === UserTypes.STORE ? "Cnpj" : "Cpf"}
                    placeholder={
                      userType === UserTypes.STORE
                        ? "Digite seu CNPJ"
                        : "Digite seu CPF"
                    }
                    required
                    maxLength={15}
                    onBlur={(event) => {
                      verifyInputedData(event, [
                        { useValidFields, setValidFields },
                        { useLastValidatedFields, setLastValidatedFields },
                      ]);
                    }}
                    className={getVerifiedInputClass(
                      userType === UserTypes.STORE
                        ? useValidFields.Cnpj
                        : useValidFields.Cpf
                    )}
                  />
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

                {userType === UserTypes.STORE && (
                  <>
                    <div className={style.inputBox}>
                      <label htmlFor="SocialReason">Razão Social</label>
                      <input
                        id="SocialReason"
                        type="text"
                        name="SocialReason"
                        placeholder="Digite a razão social"
                        required
                        maxLength={255}
                        onBlur={(event) => {
                          verifyInputedData(event, [
                            { useValidFields, setValidFields },
                            { useLastValidatedFields, setLastValidatedFields },
                          ]);
                        }}
                        className={getVerifiedInputClass(
                          useValidFields.SocialReason
                        )}
                      />
                    </div>
                    <div className={style.inputBox}>
                      <label htmlFor="ComercialName">Nome Fantasia</label>
                      <input
                        id="ComercialName"
                        type="text"
                        name="ComercialName"
                        placeholder="Digite o nome fantasia"
                        required
                        maxLength={255}
                        onBlur={(event) => {
                          verifyInputedData(event, [
                            { useValidFields, setValidFields },
                            { useLastValidatedFields, setLastValidatedFields },
                          ]);
                        }}
                        className={getVerifiedInputClass(
                          useValidFields.ComercialName
                        )}
                      />
                    </div>
                  </>
                )}

                {userType === UserTypes.MOTOBOY && (
                  <>
                    <div className={style.inputBox}>
                      <label htmlFor="CNH">CNH</label>
                      <input
                        id="CNH"
                        type="text"
                        name="Cnh"
                        placeholder="Digite a CNH"
                        required
                        maxLength={255}
                        onBlur={(event) => {
                          verifyInputedData(event, [
                            { useValidFields, setValidFields },
                            { useLastValidatedFields, setLastValidatedFields },
                          ]);
                        }}
                      />
                    </div>
                    <div className={style.inputBox}>
                      <label htmlFor="Plate">Placa da Moto</label>
                      <input
                        id="Plate"
                        type="text"
                        name="Plate"
                        placeholder="Digite a placa da moto"
                        required
                        maxLength={255}
                        onBlur={(event) => {
                          verifyInputedData(event, [
                            { useValidFields, setValidFields },
                            { useLastValidatedFields, setLastValidatedFields },
                          ]);
                        }}
                      />
                    </div>
                  </>
                )}
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
