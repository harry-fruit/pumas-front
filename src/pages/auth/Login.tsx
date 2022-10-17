import axios from 'axios';
import Head from 'next/head';
import style from '../../styles/auth/Login.module.css';

const Login = () => {
    // const handlePost = async (e:any) =>  {
    //     const responseawait axios.post('localhost:3001/auth/login', { Login: 'test', Password: 'test' })
    //     alert('hey')
    // };
    
    return (
    <>
    <Head>
        <title>Entrar</title>   
    </Head>
        <div id={style.container}>

            <div className={style.drinksBackground}/>

            <div id={style.principal}>

                <div className={style.logo}/>

                <button className={style.botaoParceiro}><b>Seja um parceiro da Puma&apos;s Delivery</b></button>

                <h2>Entrar na conta <br/> com e-mail e senha</h2>

                <form action={`${process.env.API_URL_BASE}/auth/login`} method='post'>
                    <input type="text" name="Email" placeholder="Email" required/>
                    <input type="password" name="Password" placeholder="Senha" required/>
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