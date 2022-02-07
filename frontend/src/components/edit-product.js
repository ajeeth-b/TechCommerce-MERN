import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


function EditProduct() {

    const urlHistory = useHistory();
    const product = useSelector((state) => state.editProduct);

    if (product == null) {
        urlHistory.push('/')
    }


    const [name, setName] = useState(product.name)
    const [imageUrl, setImageUrl] = useState(product.imageUrl)
    const [type, setType] = useState(product.type)
    const [price, setPrice] = useState(product.price)


    const [isPending, setisPending] = useState(false)


    const handleEdit = (e) => {
        e.preventDefault();
        const new_product = {
            _id: product._id,
            name: name,
            imageUrl: imageUrl,
            type: type,
            price: price
        }
        setisPending(true)
        fetch('http://localhost:8000/products', {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(new_product)
        }).then((res) => {
            setisPending(false)
            urlHistory.push('/')
        }).catch((e) => { console.log('error', e) })
    }

    return (
        <div>
            <form onSubmit={handleEdit}>
                <div className="container">
                    <div className="col-3 mb-3">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            id="name1"
                            aria-describedby="emailHelp"
                            onChange={(e) => setName(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="col-5 mb-3">
                        <label htmlFor="imageURL" className="form-label">Image Url</label>
                        <input
                            type="text"
                            className="form-control"
                            id="imageURL"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="col-3 mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="col-3 mb-3">
                        <label className="form-label">Product Type</label>
                        <select
                            className="form-select"
                            aria-label="Type"
                            value={type}
                            disabled
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="download">Download</option>
                            <option value="subscription">Subscription</option>
                            <option value="delivery">Delivery</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        {isPending && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                        Edit
                    </button>
                </div>
            </form >
        </div >
    )
}

export default EditProduct