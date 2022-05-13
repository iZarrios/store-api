import dotenv from "dotenv"
import express from 'express';
import connectDB from './db/connect.js';
import productsRouter from './routes/products.js';
import notFoundMiddlware from './middleware/error-handling.js';
import routeNotFound from './middleware/not-found.js';


dotenv.config();
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;


const app = express();

// json parsing in express
app.use(express.json());

// { useNewUrlParser: true, useUnifiedTopology: true }
const startServer = async() => {
    try {
        app.listen(PORT, console.log(`listening on http://localhost:${PORT}`));
        await connectDB(uri);
        console.log('connected to db');
    } catch (error) {
        console.log(error);
    }

}

//root route
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// v1 api routes
app.use('/api/v1/products', productsRouter);


// catch 404
// app.use((req, res, next) => {

//     let err = new Error('Please check end point and try again');
//     err.status = 404;
//     next(err);
// });

app.use(routeNotFound);
app.use(notFoundMiddlware);



startServer();