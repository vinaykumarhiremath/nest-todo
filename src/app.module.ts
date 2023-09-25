import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/item.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ItemModule,MongooseModule.forRoot("mongodb://localhost:27017")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
