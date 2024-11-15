import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INVENTORY',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: parseInt(process.env.INVENTORY_APP_PORT),
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class InventoryServiceModule {}

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CUSTOMERS',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: parseInt(process.env.CUSTOMERS_APP_PORT),
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class CustomerServiceModule {}
