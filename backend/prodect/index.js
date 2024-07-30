const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 7845;

const productModel = require("../Product")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const url = 'mongodb://localhost:27017';
const dbName = 'customer';

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/addProduct', async function (req, res) {
    const { p_name, catogory, p_desc, p_price, status, p_qty, rate, image } = req.body;

    if (!p_name || !catogory || !p_desc || !p_price || !status || !p_qty || !rate || !image) {
        return res.status(400).send('Invalid input');
    }

    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');
        const db = client.db(dbName);
        const collection = db.collection('product');

        const newProduct = {
            p_name,
            catogory,
            p_desc,
            p_price,
            status,
            p_qty,
            rate,
            image
        };

        await collection.insertOne(newProduct);
        productModel.create({
            p_name : p_name,
            catogory : catogory,
            p_desc : p_desc,
            p_price : p_price,
            status : status,
            p_qty : p_qty,
            rate : rate,
            image : image
        })
        res.status(201).send('Product added successfully');
    } catch (err) {
        console.error('Failed to connect to the database. Error:', err);
        res.status(500).send('Internal server error');
    } finally {
        await client.close();
        console.log('Database connection closed.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});