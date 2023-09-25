
import { Schema } from "mongoose";

export const ItemSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    }
});

export interface Item{
    title:string,
    quantity:number,
    description:string
};