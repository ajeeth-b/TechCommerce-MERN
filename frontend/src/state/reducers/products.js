const editProduct = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PRODUCT': {
            return action.product;
        }
        default: {
            return null
        }
    }
}

export default editProduct;