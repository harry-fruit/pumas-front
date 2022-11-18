import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/Delivery.module.css'

const Delivery = () => {
    return (
        <>
            <Head>
                <title>Pedido Finalizado</title>
            </Head>
            <div className={style.Container}>
                <div className={style.Image} />
                <p className={style.Response}>Seu pedido foi realizado com sucesso, agora é só aguardar a entrega {';)'}</p>
                <Link href="/catalog">
                    <a className={style.Tip}>Voltar ao catálogo</a>
                </Link>
            </div>
        </>
    )
}

export default Delivery