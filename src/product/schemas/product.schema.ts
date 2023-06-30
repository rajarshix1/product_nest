
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    
    @Prop({ required: true })
    title: string;
    
    @Prop()
    description: string;

    @Prop({type: {}})
    image: object;

    @Prop({ required: true })
    price: number;

    @Prop({ type: []})
    size: object;

    @Prop({type: {}})
    video: string;

    @Prop({ default: Date.now() })
    createdAt: Date;
}



export const ProductSchema = SchemaFactory.createForClass(Product);