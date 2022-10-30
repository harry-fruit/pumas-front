import { Popup } from "devextreme-react"
import { Position } from "devextreme-react/popup"
import { ItemPopupContainer } from "./ItemPopupContainer";

export const ItemPopup = ({ itemData, handlers: { handleItemPopup }, size:{width, height, isMobile}}) => {
    return (
        <Popup
            visible={true}
            dragEnabled={true}
            hideOnOutsideClick={true}
            showCloseButton={true}
            showTitle={true}
            title="Information"
            container="#mainContainer"
            width={isMobile ? (width) : ((width as number) * 0.75)}
            height={(isMobile ? (height as number * 0.7) : ((height as number) * 0.4))}
            onHidden={() => { handleItemPopup(false) }}
            >
            <Position
                at="center"
                my="center"
            />
           <ItemPopupContainer size={{ width, height, isMobile }}/>
        </Popup>
    )
};