import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateCustomerDto } from "./customer/customer.dto";
import { AppService } from "./app.service";
import { ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags("customers")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("customers")
  async customerGet() {
    return await this.appService.getCustomer();
  }

  @Get("customers/:id")
  async customerGetById(@Param("id") id: string) {
    return await this.appService.getCustomeById(id);
  }

  @Post("customers")
  async customerCreate(@Body() model: CreateCustomerDto) {
    return await this.appService.createCustomer(model);
  }

  @Delete("customers/:id")
  async customerDeleteById(@Param("id") id: string) {
    return await this.appService.deleteCustomeById(id);
  }
}
