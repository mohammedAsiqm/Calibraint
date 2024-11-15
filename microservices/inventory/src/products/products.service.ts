import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.schema';
import { CreateProductDto } from './products.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async createProduct(product: CreateProductDto) {
    return (await this.productModel.create(product)).save();
  }

  async getProducts() {
    return await this.productModel.find();
  }
}
