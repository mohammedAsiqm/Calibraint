import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CustomerService } from './customers.service';
import { CreateCustomerDto } from './customers.dto';

@Controller()
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @MessagePattern('Customers_CreateCustomer')
  createCustomers(customer: CreateCustomerDto) {
    return this.customerService.createCustomer(customer);
  }

  @MessagePattern('Customers_GetCustomers')
  getCustomers() {
    return this.customerService.getCustomers();
  }
}
