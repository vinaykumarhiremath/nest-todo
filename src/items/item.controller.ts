
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemService } from "./item.service";

@Controller("item")
export class ItemController{
    constructor(private itemService:ItemService){}

    @Post()
    async addItem(@Body("title") itemTitle:string,@Body("quantity")itemQty:number,@Body("description")itemDesc:string){
        const data = await this.itemService.insertItem(itemTitle,itemQty,itemDesc);
        return data;
    }

    @Get()
    async getAllItems(){
        const data = await this.itemService.getItems();
        return data;
    }

    @Get(":id")
    async getItem(@Param("id") itemId:string){
        const data = await this.itemService.getIndiItem(itemId);
        return data;
    }

    @Put(":id")
    async updateItem(@Param("id") itemId:string,@Body() details:object){
        const data = await this.itemService.updateItem(itemId,details);
        return data;
    }

    @Delete(":id")
    async deleteItem(@Param("id") itemId:string){
        const data = await this.itemService.deleteItem(itemId);
        return data;
    }
}