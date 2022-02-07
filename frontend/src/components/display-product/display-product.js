import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_edit_product } from '../../state/actions/products';
import { add_to_cart } from '../../state/actions/cart';
import { useHistory } from "react-router-dom";

export default function DisplayProduct(props) {

    const dispatch = useDispatch();
    const product_action_creators = bindActionCreators(set_edit_product, dispatch);
    const add_to_cart_AC = bindActionCreators(add_to_cart, dispatch);
    const urlHistory = useHistory();

    const handleOnEdit = (e) => {
        product_action_creators(props.product);
        urlHistory.push('/edit')
    };

    const addToCart = (e) => {
        add_to_cart_AC(props.product);
    }

    return <div>
        <div className='containter'>
            <div className='row'>
                <div className='col-4'>
                    <img
                        src={props.product.imageUrl}
                        className="rounded mx-auto d-block"
                        style={{ maxWidth: "200px", maxHeight: "250px" }}
                        alt="..."
                    >
                    </img>
                </div>
                <div className='col-sm-6'>
                    <div className="float-end">
                        <h4>{props.product.name}</h4>
                        <h3> ₹ {props.product.price}</h3>
                        <h5 style={{ textTransform: "capitalize" }}> Type: {props.product.type}</h5>
                        <button onClick={handleOnEdit} className='btn btn-primary'> Edit </button>
                        <br />
                        <br />
                        <button onClick={addToCart} className='btn btn-primary'> Add to cart </button>
                        {'\u00A0'}{'\u00A0'}{'\u00A0'}
                        <button className='btn btn-primary'> Buy </button>
                    </div>
                </div>
            </div>
        </div >
    </div >;
}
