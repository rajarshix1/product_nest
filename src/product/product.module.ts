import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schemas/product.schema';


@Module({
  imports: [MongooseModule.forRoot(
    process.env.URI,
  ), MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService, ProductModule]

})

export class ProductModule {}
