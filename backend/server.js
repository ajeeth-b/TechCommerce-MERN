import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import product_routes from './routes/products.js'


const app = express();


dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/products', product_routes)


mongoose.connect(
    process.env.DB_CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('Connected to DB...')
    app.listen(8000, () => {
        console.log('Server started...')
    })
}).catch((e) => { console.log('error', e.message) })

