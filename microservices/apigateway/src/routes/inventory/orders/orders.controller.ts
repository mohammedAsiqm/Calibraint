import { Controller, Inject, Get, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject('INVENTORY') private readonly inventoryService: ClientProxy,
  ) {}

  @Get('')
  getOrders() {
    return this.inventoryService.send('Orders_GetOrders', {});
  }

  @Post('create')
  createOrders(@Body() order: CreateOrderDto) {
    return this.inventoryService.send('Orders_CreateOrder', order);
  }
}
