import Head from 'next/head';
import style from '../../styles/auth/Login.module.css';

const Login = () => {
    return (
    <>
    <Head>
        <title>Entrar</title>   
    </Head>
        <div id={style.container}>

            <div id={style.principal}>

                <div className={style.logo}/>

                <button className={style.botaoParceiro}><b>Seja um parceiro da Puma's Delivery</b></button>

                <h2>Entrar na conta <br/> com e-mail e senha</h2>

                <form action="TODO">
                    <input type="email" placeholder="E-mail" required/>
                    <input type="password" placeholder="Senha" required/>
                    <button type="submit" className={`btn btnCustom`}>Entrar</button>
                </form>

                <div className={style.recuperacao}>
                    <p><a href='#'>Esqueci a senha</a></p>
                    <p><a href="#">Quero criar uma conta</a></p>
                </div>

            </div>
        </div>
    </>
    )
};

export default Login;