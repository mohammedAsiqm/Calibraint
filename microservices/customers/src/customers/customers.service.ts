import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { customer } from './customers.schema';
import { CreateCustomerDto } from './customers.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(customer.name) private readonly customerModel: Model<customer>,
  ) {}

  async createCustomer(customer: CreateCustomerDto) {
    return (await this.customerModel.create(customer)).save();
  }

  async getCustomers() {
    return await this.customerModel.find();
  }
}
