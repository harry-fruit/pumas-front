import style from '../../styles/Cart.module.css';
import { Button, SelectBox, TextBox } from 'devextreme-react';
import DataGrid, {
    Column,
    Pager,
    Paging,
    Editing,
    Summary,
    TotalItem
} from 'devextreme-react/data-grid';
import { removetem } from '../../util/HandleCart';
import Router from 'next/router';

export const ListCartItemsDesktop = ({ dataSource }) => {

    return (
        <>
            <div className={style.cartContainer}>

                <div className={style.leftContainer}>
                    <DataGrid
                        dataSource={dataSource}
                        allowColumnReordering={false}
                        showBorders={true}
                        height={'78vh'}
                        onRowRemoved={
                            (event) => {
                                const name = event.data.Name
                                removetem(name)
                            }
                        }
                        
                    // onContentReady={this.onContentReady}
                    >
                        <Editing
                            mode="cell"
                            allowUpdating={false}
                            allowAdding={false}
                            allowDeleting={true}
                            
                            />
                        <Column dataField="Name" caption={'Nome do Item'} dataType="string" alignment={'center'} />
                        <Column dataField="Price" caption={'Valor Unitário'} dataType="number" format="R$ #,##0.##" alignment={'center'} />
                        <Column dataField="Quantity" caption={'Quantidade'} dataType="number" alignment={'center'} />
                        <Column dataField="Total" caption={'Total'} dataType="number" format="R$ #,##0.##" alignment={'center'}/>
                        <Summary >
                            <TotalItem
                            column="Total"
                            summaryType="sum"
                            displayFormat="R${0}"
                            valueFormat={"#,##0.##"}
                            showInColumn="Total" />
                        </Summary>
                        <Pager showPageSizeSelector={false} />
                        <Paging defaultPageSize={10} />
                    </DataGrid>
                </div>
                <div className={style.rightContainer}>
                    <h1>Selecione o Método de Pagamento</h1>
                    <SelectBox
                        items={['Dinheiro', 'Cartão', 'Pix']}
                        placeholder={'Insira o método de pagamento'}
                        width="80%"
                        value={"Dinheiro"}
                    />
                    <TextBox 
                        placeholder='Insira o endereço de entrega'
                        width="80%"
                        
                        />
                    <p><i>Obs: Todas nossas formas de pagamento são realizadas no ato da entrega.</i></p>
                    <Button
                        text='Finalizar Pagamento'
                        width='80%'
                        className={style.confirmButton}
                        onClick = {(() => {
                            Router.push("/delivery?key=2ew56f4ewfew12a1c45qq");
                        })}

                    >

                    </Button>
                </div>
            </div>
        </>
    )
}