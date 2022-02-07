import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: String,
        type: String,
        imageUrl: String,
        price: Number,
    }
)

const Products = mongoose.model('Products', productSchema);

export default Products;