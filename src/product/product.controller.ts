import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Query,
  } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductEntity } from "./schemas/product.entity";

  
  @Controller('product')
  export class ProductController  {
    constructor(
      private readonly productService: ProductService
    ) {}

    ///Get items
    @Get("all")
    async getItems() {
              return await this.productService.getItems();
    }
  
    @Get()
    async getItem(@Query() req: ProductEntity) {
      console.log(req);
      
      return await this.productService.getItem(req);
    }
    @Post()
    async createItem(@Body() req: ProductEntity) {
      return await this.productService.createItem(req);
    }
    @Put()
    async editItem(@Body() req: ProductEntity, @Query() query:any) {
      return await this.productService.editItem(req, query);
    }
    @Delete()
    async deleteItem(@Query() req: any) {
      return await this.productService.deleteItem(req);
    }

  }
  