import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateCustomerDto } from "./customer/customer.dto";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("customer")
  async customerGet() {
    return await this.appService.getCustomer();
  }

  @Get("customer/:id")
  async customerGetById(@Param("id") id: string) {
    return await this.appService.getCustomeById(id);
  }

  @Post("customer")
  async customerCreate(@Body() model: CreateCustomerDto) {
    return await this.appService.createCustomer(model);
  }

  @Delete("customer/:id")
  async customerDeleteById(@Param("id") id: string) {
    return await this.appService.deleteCustomeById(id);
  }
}
