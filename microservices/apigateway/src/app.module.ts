import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './routes/inventory/inventory.module';
import { CustomerModule } from './routes/customers/customers.module';

@Module({
  imports: [InventoryModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
