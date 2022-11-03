import { Popup, ScrollView } from "devextreme-react"
import { ItemPopupContainer } from "./ItemPopupContainer";

export const ItemPopup = ({ itemData: { Name, Category, Description, Image }, handlers: { handleItemPopup }, size: { width, height, isMobile } }) => {
    return (
        <Popup
            visible={true}
            dragEnabled={true}
            hideOnOutsideClick={true}
            showCloseButton={true}
            showTitle={true}
            title={'Detalhes do Produto'}
            container="#mainContainer"
            width={isMobile ? (width) : ((width as number) * 0.75)}
            height={(isMobile ? (height as number * 0.78) : ((height as number) * 0.7))}
            onHidden={() => { handleItemPopup(false) }}
        >
            {
                isMobile ?
                (<ScrollView id="scrollview"
                    scrollByContent={true}
                    bounceEnabled={false}
                    // onReachBottom={this.updateBottomContent}
                    // onPullDown={this.updateTopContent}
                    showScrollbar={"onScroll"}
                    scrollByThumb={true}>
                    <ItemPopupContainer
                        itemData={{ Name, Category, Description, Image }}
                        size={{ width, height, isMobile }} />
                </ScrollView>)
                :
                <ItemPopupContainer
                itemData={{ Name, Category, Description, Image }}
                size={{ width, height, isMobile }} />
            }
            
        </Popup>
    )
};