import { Injectable } from "@nestjs/common";
import { CustomerService } from "./customer/customer.service";
import { CreateCustomerDto } from "./customer/customer.dto";

@Injectable()
export class AppService {
  constructor(private readonly customrService: CustomerService) {}

  async createCustomer(customerCreate: CreateCustomerDto) {
    return await this.customrService.create(customerCreate);
  }

  async getCustomer() {
    return await this.customrService.findAll();
  }

  async getCustomeById(id: string) {
    return await this.customrService.findById(id);
  }

  async deleteCustomeById(id: string) {
    return await this.customrService.delete(id);
  }
}
