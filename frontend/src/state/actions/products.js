

export const set_edit_product = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_PRODUCT',
            product: product
        });
    };
}