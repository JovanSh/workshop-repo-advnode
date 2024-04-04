import { Schema, model } from "mongoose";
import validator from "validator";

const studentSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "First name is required"],
            minLength: 2,
        },
        stock: {
            type: Number,
            required: [true, "Last name is required"],
            min: 1,
        },
        description: {
            type: String,
            required: [true, "First name is required"],
        },
        category: {
            type: String,
            required: [true, "First name is required"],
        },
        price: {
            type: Number,
            required: [true, "First name is required"],
        },
        rating: {
            type: Number,
            required: [true, "First name is required"],
            min: 1,
            max: 5,
        },
    },
    {
        timestamps: true,
    }
);

export const Product = model("Product", productSchema);