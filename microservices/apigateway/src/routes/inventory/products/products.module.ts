import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { InventoryServiceModule } from 'src/clientmodules.register';

@Module({
  imports: [InventoryServiceModule],
  controllers: [ProductsController],
})
export class ProductsModule {}
