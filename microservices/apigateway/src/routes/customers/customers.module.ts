import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomerServiceModule } from 'src/clientmodules.register';

@Module({
  imports: [CustomerServiceModule],
  controllers: [CustomersController],
})
export class CustomerModule {}
