import mongoose from "mongoose";
import Products from "../models/products.model.js"

export const getProducts = async (req, res) => {
    const products = await Products.find();
    res.status(200).json(products)

}

export const createProducts = async (req, res) => {
    const data = req.body;
    const product = new Products(data);

    await product.save();
    res.status(401).json(product);
}

export const updateProducts = async (req, res) => {
    const data = req.body;
    if (!data._id) {
        res.status(400).json({ message: "Bad Request!" });
    }
    if (!mongoose.Types.ObjectId.isValid(data._id)) {
        res.status(400).json({ message: "Bad Request!" });
    }

    const updatedProduct = await Products.findByIdAndUpdate(data._id, data, { new: true });

    res.json(updatedProduct);
}
