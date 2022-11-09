import _ from 'lodash';
import Head from 'next/head';
import style from '../styles/Catalog.module.css';
import { useState } from 'react';
import { Header } from '../components/Header';
import { CategoriesCatalog } from '../components/CategoriesCatalog';
import { ItemImage } from '../components/Image';
import { Footer } from '../components/Footer';
import { ItemPopup } from '../components/popup/ItemPopup';
import { useWindowSize } from '../hooks/useWindowSize';
import { ToastContainer } from 'react-toastify';


const CatalogByCategory = ({ data }) => {
    const { dataByCategory: itemsData } = data;
    const [useCategoryFilter, setCategoryFilter] = useState(null as any);
    const [useItemsToShow, setItemsToShow] = useState(itemsData);
    const [useShowItemPopup, setShowItemPopup] = useState(false);
    const { width, height, isMobile } = useWindowSize()
    const [usePopupItemData, setPopupItemData] = useState({} as any)

    const handleItemPopup = (showPopup, categoryData) => {
        setPopupItemData(categoryData)
        setShowItemPopup(showPopup)
    }

    return (
        <>
            <Head>
                <title>Catálogo</title>
            </Head>
            <Header />
            <main id={'mainContainer'} className={style.main}>
                <CategoriesCatalog
                    mainCategories={data.mainCategories}
                    hooks={{
                        useCategoryFilter,
                        setCategoryFilter,
                        setItemsToShow,
                        itemsData
                    }}
                />
                { useShowItemPopup
                    && (<ItemPopup
                        itemData={usePopupItemData}
                        handlers={{ handleItemPopup }}
                        size={{ width, height, isMobile }}
                    />)
                }
                <ToastContainer />
                <section className={style.listagemProdutos}>
                    {   
                        Object.keys(useItemsToShow).map(element => {
                            return (
                                <section className={style.produtosPorCategoria} key={element}>
                                    <h2>{_.capitalize(element)}</h2>
                                    <div className={style.produtos}>
                                        <div className={style.containerProdutos}>
                                            {
                                                data.dataByCategory[element].map(categoryData => {
                                                    return (<div className={style.produto} key={categoryData.Name} onClick={(event) => { handleItemPopup(true, categoryData) }}>
                                                        <div className={style.descricaoProduto}>
                                                            <ItemImage url={categoryData.Image || ''} />
                                                            <p><b>{categoryData.Name}</b></p>
                                                            <p>R${categoryData.Price}</p>
                                                        </div>
                                                    </div>)
                                                })
                                            }
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
                </section>
            </main>
            <Footer />
        </>
    )
};


export const getServerSideProps = async (context) => {
    const response = await (await fetch(`${process.env.API_URL_BASE}/items`)).json();
    const grouped = _.groupBy(response.data, element => element.Category);

    const data = {
        dataByCategory: grouped,
        allCategories: Object.keys(grouped),
        mainCategories: Object.keys(grouped).splice(0, 4)
    };

    return {
        props: { data }
    };
};

export default CatalogByCategory;