import { Schema,model } from "mongoose";
const productSchema= new Schema({
    name: String,
    barcode:Number, 
    brand: String,
    price: Number,
    cost: Number,
    stock: Number,
    expiredDate: String,
    status: Number
},{
    versionKey: false,
    timestamps: true
});

export default model('product',productSchema);