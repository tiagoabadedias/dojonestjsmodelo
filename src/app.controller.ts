import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCustomerDto } from './customer/customer.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('customer')
  async customerGet() {
    return await this.appService.getCustomer();
  }

  @Get('customer/:id')
  async customerGetById(id: string) {
    return await this.appService.getCustomeById(id);
  }

  @Post('customer')
  async customerCreate(@Body() model: CreateCustomerDto) {
    return await this.appService.createCustomer(model);
  }
}
