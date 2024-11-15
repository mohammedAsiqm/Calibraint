import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('INVENTORY') private readonly inventoryService: ClientProxy,
  ) {}

  @Get('')
  getProducts() {
    return this.inventoryService.send('Product_GetProducts', {});
  }

  @Post('create')
  createProduct(@Body() product: CreateProductDto) {
    return this.inventoryService.send('Product_CreateProduct', product);
  }
}
