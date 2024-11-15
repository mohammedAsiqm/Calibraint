import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomerService } from './customers.service';
import { customer, customerSchema } from './customers.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: customer.name, schema: customerSchema },
    ]),
  ],
  controllers: [CustomersController],
  providers: [CustomerService],
})
export class CustomersModule {}
