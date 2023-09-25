import { Injectable } from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Item } from "./item.model";

@Injectable({})
export class ItemService{
    constructor(@InjectModel("Items") private itemModel:Model<Item>){}

    async insertItem(title:string,quantity:number,description:string){
        try {
            const newItem = new this.itemModel({title,quantity,description});
            const result = await newItem.save();
            console.log(result);
            return result;
        } catch (error) {
            return error.message;
        }
    }

    async getItems():Promise<Item[]>{
        try {
            const result = await this.itemModel.find().exec();
            return result as Item[];
        } catch (error) {
            return error.message;
        }
    }

    async getIndiItem(id:string){
        try {
        // const result = await this.itemModel.findById(id).exec();
        const result = await this.itemModel.findOne({_id:id}).exec();
        return result;
        } catch (error) {
            return JSON.stringify(error.message);
        }
    }

    async updateItem(id:string,obj:object){
        const result = await this.itemModel.updateOne({_id:id},obj).exec();
        return result;
    }

    async deleteItem(id:string){
        const result = await this.itemModel.deleteOne({_id:id}).exec();
        return result;
    }
}