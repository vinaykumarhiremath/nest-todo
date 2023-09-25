import { Module } from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose"
import { ItemController } from "./item.controller";
import { ItemService } from "./item.service";
import { ItemSchema } from "./item.model";

@Module({
    imports:[MongooseModule.forFeature([{name:"Items",schema:ItemSchema}])],
    controllers:[ItemController],
    providers:[ItemService]
})
export class ItemModule{}