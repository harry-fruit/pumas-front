import style from "../../styles/Cart.module.css";
import { ScrollView } from "devextreme-react";
import { useWindowSize } from "../../hooks/useWindowSize";

export const ListCartItemsMobile = () => {
    const { width, height, isMobile } = useWindowSize();

    return (
        <ScrollView id="scrollview"
                scrollByContent={true}
                bounceEnabled={false}
                showScrollbar={"onScroll"}
                scrollByThumb={true}
                height={(height as number) * 0.8}
            >
                <main className={style.main}>
                    <h1>Meu carrinho</h1>
                    <div className={style.itemsContainer}>
                        <div className={style.itemContainer}>
                            <div className={style.firstRow}>
                                <div className={style.imgContainer}>
                                    <div className={style.imgItem} />
                                </div>
                                <div className={style.itemDescription}>
                                    <p className={style.itemName}>Nome Item | LOREM IPSUM</p>
                                </div>
                            </div>
                            <div className={style.secondRow}>
                                <div className={style.quantity}>
                                    <div className={style.quantityWraper}>
                                        <button>-</button>
                                        <div className={style.quantityDisplay}>10000</div>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className={style.removeItem}>
                                    <p id="removeItem">Remover item</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

            </ScrollView>
    )
};