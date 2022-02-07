const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD': {
            state.push(action.product);
            return state;
        }
        default: {
            return null
        }
    }
}

export default cart;