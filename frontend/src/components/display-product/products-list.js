import React from "react";
import DisplayProduct from "./display-product";
// import DownloadableProduct from './types/DownloadableProduct'
// import DeliverableProduct from './types/DeliverableProduct'
// import SubscriptionalProduct from './types/SubscriptionanlProduct'


// function ProductsList(props) {

//     const productsComponent = props.products.map((product, index) => {
//         if (product.type === "download") {
//             return <li className="list-group-item" key={index}> <DownloadableProduct product={product}> </DownloadableProduct></li>
//         }
//         if (product.type === "delivery") {
//             return <li className="list-group-item" key={index}> <DeliverableProduct product={product}> </DeliverableProduct></li>
//         }
//         return <li className="list-group-item" key={index}> <SubscriptionalProduct product={product}> </SubscriptionalProduct></li>
//     })
//     return <div> <ul className="list-group" style={{ listStyleType: "none" }}> {productsComponent} </ul> </div>
// }

function ProductsList(props) {

    const productsComponent = props.products.map((product, index) => {
        return <li className="list-group-item" key={index}> <DisplayProduct product={product}> </DisplayProduct></li>
    })

    return <div> <ul className="list-group" style={{ listStyleType: "none" }}> {productsComponent} </ul> </div>

}

export default ProductsList;

