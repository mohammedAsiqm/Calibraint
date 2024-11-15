import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './products.service';
import { CreateProductDto } from './products.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('Product_CreateProduct')
  createProduct(product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @MessagePattern('Product_GetProducts')
  getProducts() {
    return this.productService.getProducts();
  }
}
