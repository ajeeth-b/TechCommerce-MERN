export const add_to_cart = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD',
            product: product
        });
    };
}
