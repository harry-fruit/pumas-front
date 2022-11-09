import Link from 'next/link';
import { useWindowSize } from '../hooks/useWindowSize';
import style from '../styles/components/Header.module.css';

export const Header = () => {
    const { isMobile } = useWindowSize();
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light bg-primary">
                <div className="container-fluid">
                    <a className={`navbar-brand abs ${style.pumaIcon}`} href="#"/>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="collapseNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Catalogo</a>
                            </li>

                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className={`nav-item ${style.marginRight}`}>
                                {
                                    isMobile ? <Link className="nav-link" href="/cart"><span className="cursorPointer">Carrinho</span></Link> 
                                    : <Link href="/cart"><span className="cursorPointer"><i className={`fa-solid fa-cart-shopping col-md-2 ${style.userIcons}`}></i></span></Link>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    isMobile ? <a className="nav-link" href="#">Minha Conta</a> 
                                    : <a><i className={`fa-solid fa-user ${style.userIcons}`}></i></a>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}