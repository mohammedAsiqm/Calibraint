import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './orders.schema';
import { CreateOrderDto } from './orders.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  async createOrder(order: CreateOrderDto) {
    return (await this.orderModel.create(order)).save();
  }

  async getOrders() {
    return await this.orderModel.find();
  }
}
