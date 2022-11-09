import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useWindowSize } from "../hooks/useWindowSize";
import { ListCartItemsMobile } from "../components/cart/listCartItemsMobile";

const Cart = () => {
    const { width, height, isMobile } = useWindowSize()
    return (
        <>
            <Head>
                <title>Carrinho</title>
            </Head>
            <Header />
            {
                isMobile ? <ListCartItemsMobile/> : <></>
            }
            <Footer />
        </>
    )
};

export default Cart;