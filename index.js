/*
Product

{
    title: string;
    stock: number ( can't be smaller than 0)
    description: string
    category: string( come up with your own )
    price: number
    rating: number (1-5)
}
Order

{
    date: date ( use iso strings here ex: 2022-03-10 )
    user: string
    products: ObjectId[] (references to the products)
}
The operations that need to be done:
CRUD Operations with products ( apply proper validation everywhere )

Filtering products based on the fields:

Is in stock or not
Description, title and category keywords
CRUD Operations for working with orders, don't forget when user wants to view a single order to populate the products field ( apply proper validation everywhere )

Bonus requirements
Add the following filters to the products query

All products that have a rating greater or equal specified number in the query
Sort by price ascending or descending
Create another resource that would be User

{
    firstName: string;
    lastName: string;
    age: > 18;
    email: string ( must be unique and valid email)
    country: string
    orders: ObjectId[] Reference to order documents
}
Operations that need to be done with users
Change the user field in the orders to be a reference to a user object
Whenever creating an order update the user document as well by adding the newly created order's Id to the orders field in the user
Tips
The workshop is meant to be done step by step, don't move on the next requirement until you have finished the ones before it.
Try to break up every single task in even smaller ones
Test, test and test every single endpoint before moving on to the next
The goal is to do as much work as possible in class before going home and finishing the rest as a homework
*/

import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { globalRouter } from "./src/const/router.const.js";

//mongodb+srv://<username>:<password>@cluster0.pscxwdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

console.log(MONGO_URI);

const app = express();

app.use(express.json());

app.use("/api", globalRouter);

app.listen(process.env.PORT, process.env.HOST, async () => {
    try {
        //Connecting with the database using mongoose connect method
        await mongoose.connect(MONGO_URI);

        console.log("Connected to MongoDB");

        console.log(`Server is up at port: ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
});