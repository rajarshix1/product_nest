import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { ProductEntity } from './schemas/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,

  ) { }

  async getItems() {
      let items = await this.productModel
        .find({})
      console.log("here", items);
    
    if (items) { return ({ data: items }) }
    else return ({
      message: "Not Found"
    })
  }

  async getItem(req:any) {
    console.log(req);
    try {
      req.size && (req.size= JSON.parse(req.size))
  
        let items = await this.productModel
          .find(req)
        console.log("here", items);
      
      if (items) { return ({ data: items }) }
      else return ({
        message: "Not Found"
      })
      
    } catch (error) {
      return(error)
    }
  }

  

  async createItem(req: any) {
    
    try {
    req.size && (req.size= JSON.parse(req.size))
      await this.productModel.create(req)
        return { message: "Successfully created", data: req }
      }
    
    catch (error) {
      return ({
    
        "message": error.message
      })
    }
  }
  async editItem(req: any, query:any) {
    try {
      console.log(query);
      
    req.size && (req.size= JSON.parse(req.size))
      const update = await this.productModel.findByIdAndUpdate(query.id, req, {new:true})
        return { message: "Successfully Updated", data: update }
      }
    
    catch (error) {
      return ({
    
        "message": error.message
      })
    }
  }
  async deleteItem(req: any) {
    
    try {
      const dlt = await this.productModel.findByIdAndDelete(req.id)
      return { message: "Successfully Deleted", data: dlt }
      }
    
    catch (error) {
      return ({
    
        "message": error.message
      })
    }
  }
}