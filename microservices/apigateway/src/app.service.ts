import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  //constructor(
  //  @Inject('INVENTORY') private readonly inventoryService: ClientProxy,
  //) {}

  async getHello() {
    //const inventoryResponse = await lastValueFrom(
    //  this.inventoryService.send('get_data', {}),
    //);
    //console.log(inventoryResponse);
    //return inventoryResponse;
  }
}
