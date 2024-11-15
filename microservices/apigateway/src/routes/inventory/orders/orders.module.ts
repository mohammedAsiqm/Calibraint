import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { InventoryServiceModule } from 'src/clientmodules.register';

@Module({
  imports: [InventoryServiceModule],
  controllers: [OrdersController],
})
export class OrdersModule {}
