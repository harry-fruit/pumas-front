import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import style from '../styles/Catalog.module.css';

const Catalog = () => {
    return (
        <>
            <Head>
                <title>Catálogo</title>
            </Head>
            <Header/>
            <main className={style.main}>
                
                <div className={`container text-center ${style.container}`}>
                    <div className={`row ${style.categoriaProdutos} align-items-center`}>

                        <div className={`col ${style.categoriaProduto}`}>
                            <div className={`${style.categoria} row align-items-center`}>
                                <i className="fa-solid fa-wine-glass col-md-2"></i>
                                <a className={`col-md-10  ${style.nomeProduto}`} >Nome produto</a>
                            </div>
                        </div>

                        <div className={`col ${style.categoriaProduto}`}>
                            <div className={`${style.categoria} row align-items-center`}>
                                <i className="fa-solid fa-wine-glass col-md-2"></i>
                                <a className={`col-md-10  ${style.nomeProduto}`} >Nome produto</a>
                            </div>
                        </div>

                        <div className={`col ${style.categoriaProduto}`}>
                            <div className={`${style.categoria} row align-items-center`}>
                                <i className="fa-solid fa-wine-glass col-md-2"></i>
                                <a className={`col-md-10  ${style.nomeProduto}`} >Nome produto</a>
                            </div>
                        </div>

                        <div className={`col ${style.categoriaProduto}`}>
                            <div className={`${style.categoria} row align-items-center`}>
                                <i className="fa-solid fa-wine-glass col-md-2"></i>
                                <a className={`col-md-10  ${style.nomeProduto}`} >Nome produto</a>
                            </div>
                        </div>

                    </div>
                </div>

                <section className={style.listagemProdutos}>


                    <section className={style.produtosPorCategoria}>
                        <h2>Categoria Produto</h2>
                        <div className={style.produtos}>
                            <div className={style.containerProdutos}>
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                                
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                                
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>

                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>

                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className={style.produtosPorCategoria}>
                        <h2>Categoria Produto</h2>
                        <div className={style.produtos}>
                            <div className={style.containerProdutos}>
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                                
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                                
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>

                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>

                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className={style.produtosPorCategoria}>
                        <h2>Categoria Produto</h2>
                        <div className={style.produtos}>
                            <div className={style.containerProdutos}>
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                                
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                                
                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>

                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>

                                <div className={style.produto}>
                                    <div className={style.imgProduto}/>
                                    <div className={style.descricaoProduto}>
                                        <p>Nome Produto</p>
                                        <p>R$ 10,00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </section>


            </main>
            <Footer/>
        </>
    )
};

export default Catalog;