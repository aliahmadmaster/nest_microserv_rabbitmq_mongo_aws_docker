import { Injectable } from '@nestjs/common';
import { CreateOrderDTO } from './dto/createOrderDTO';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepositor: OrdersRepository) {}

  async createOrder(request: CreateOrderDTO){
    return this.orderRepositor.create(request)
  }
}
