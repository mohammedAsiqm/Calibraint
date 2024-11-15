import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateOrderDto } from './orders.dto';
import { OrderService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern('Orders_CreateOrder')
  createOrder(order: CreateOrderDto) {
    return this.orderService.createOrder(order);
  }

  @MessagePattern('Orders_GetOrders')
  getOrders() {
    return this.orderService.getOrders();
  }
}
