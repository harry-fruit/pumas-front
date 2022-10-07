import style from '../../styles/register/User.module.css'

const User = () => {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.formImage}>
                    <div className={style.imagemPrincipal}/>
                </div>
                <div className={style.form}>
                    <form action={`${process.env.URL_BASE}/user/create-user`} method='post'>
                        <div className={style.formHeader}>
                            <div className={style.title}>
                                <h1>Cadastre-se</h1>
                            </div>
                            <div className={style.loginButton}>
                                <button>Entrar</button>
                            </div>
                        </div>

                        <div className={style.inputGroup}>
                            <div className={style.inputBox}>
                                <label htmlFor="FirstName">Primeiro Nome</label>
                                <input id="FirstName" type="text" name="FirstName" placeholder="Digite seu primeiro nome" required/>
                            </div>

                            <div className={style.inputBox}>
                                <label htmlFor="LastName">Sobrenome</label>
                                <input id="LastName" type="text" name="LastName" placeholder="Digite seu sobrenome" required/>
                            </div>

                            <div className={style.inputBox}>
                                <label htmlFor="Login">Login</label>
                                <input id="Login" type="Login" name="Login" placeholder="Digite seu e-mail" required/>
                            </div>

                            <div className={style.inputBox}>
                                <label htmlFor="Email">E-mail</label>
                                <input id="Email" type="Email" name="Email" placeholder="Digite seu e-mail" required/>
                            </div>

                            <div className={style.inputBox}>
                                <label htmlFor="Gender">Gênero</label>
                                <input id="Gender" type="text" name="Gender" placeholder="Male" required/>
                            </div>

                            <div className={style.inputBox}>
                                <label htmlFor="Phone">Celular</label>
                                <input id="Phone" type="tel" name="Phone" placeholder="(xx) xxxx-xxxx" required/>
                            </div>

                            <div className={style.inputBox}>
                                <label htmlFor="Password">Senha</label>
                                <input id="Password" type="Password" name="Password" placeholder="Digite sua senha" required/>
                            </div>


                            <div className={style.inputBox}>
                                <label htmlFor="ConfirmPassword">Confirme sua Senha</label>
                                <input id="ConfirmPassword" type="password" name="ConfirmPassword" placeholder="Digite sua senha novamente" required/>
                            </div>

                        </div>

                        <div className={style.continueButton}>
                            <button type="submit">Continuar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default User;