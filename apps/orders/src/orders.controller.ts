import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDTO } from './dto/createOrderDTO';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() request: CreateOrderDTO){
    return this.ordersService.createOrder(request)
  }
}
