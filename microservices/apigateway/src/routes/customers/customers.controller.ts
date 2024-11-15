import { Controller, Inject, Post, Get, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCustomerDto } from './customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(
    @Inject('CUSTOMERS') private readonly customerService: ClientProxy,
  ) {}

  @Post('create')
  createCustomer(@Body() customer: CreateCustomerDto) {
    return this.customerService.send('Customers_CreateCustomer', customer);
  }

  @Get('')
  getCustomers() {
    return this.customerService.send('Customers_GetCustomers', {});
  }
}
