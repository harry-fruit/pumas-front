export const setItem = () => {

}

export const removetem = (itemName) => {
    let cart: any = localStorage.getItem('cartItems') || '[]'
    cart = JSON.parse(cart);

    cart = cart.filter(item => {
        return item.Name != itemName
    })

    localStorage.setItem('cartItems', JSON.stringify(cart));
}