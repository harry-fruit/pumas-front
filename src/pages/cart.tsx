import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useWindowSize } from "../hooks/useWindowSize";
import { ListCartItemsMobile } from "../components/cart/listCartItemsMobile";
import { ListCartItemsDesktop } from "../components/cart/listCartItemsDesktop";

const Cart = () => {
    const { width, height, isMobile } = useWindowSize()

    
    const getCartItens = () => {
        if (typeof window !== 'undefined') {
            let cart: any = localStorage.getItem('cartItems') || '[]'
            cart = JSON.parse(cart) as any;
            cart = cart.map(item => {
                return { ...item, Total: (item.Price * item.Quantity) }
            });
            return cart
          }
    }

    return (
        <>
            <Head>
                <title>Carrinho</title>
            </Head>
            <Header />
            {
                isMobile ? <ListCartItemsMobile/> : <ListCartItemsDesktop dataSource= {getCartItens()}/>
            }
            <Footer />
        </>
    )
};

export default Cart;