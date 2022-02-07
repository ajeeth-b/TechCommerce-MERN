import React from 'react';

export default function DeliverableProduct(props) {
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
          </div>
        </div>
      </div>
    </div >
  </div >;
}
