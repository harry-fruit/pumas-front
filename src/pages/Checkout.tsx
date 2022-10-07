import { DataGrid } from "devextreme-react";
import { Column, SearchPanel } from "devextreme-react/data-grid";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import style from "../styles/Checkout.module.css";

const Checkout = (): JSX.Element => {
    return (
        <>
            <Header/>
            <main>
                <DataGrid
                    dataSource={[]}
                    allowColumnReordering={false}
                    rowAlternationEnabled={false}
                    showBorders={true}
                >

                    <Column
                    dataField="Produto"
                    caption="Produto"
                    dataType="string"
                    alignment="center"
                    />
                    <Column
                    dataField="Quantidade"
                    caption="Quantidade"
                    dataType="number"
                    alignment="center"
                    />
                    <Column
                    dataField="Preco"
                    caption="Preço"
                    dataType="number"
                    format="currency"
                    alignment="center"
                    />

                </DataGrid>
                

                <div className={style.resumoPedido}>
                    <h1>Resumo do Pedido</h1>
                    <div>
                        <p>3 produtos</p>
                        <p>R$ 30</p>
                    </div>
                    <button>Continuar</button>
                </div>
            </main>
            <Footer/>
        </>
    )
};

export default Checkout;