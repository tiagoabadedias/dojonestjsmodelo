import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { Customer } from "./customer";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>
  ) {}

  async create(createCatDto: any): Promise<Customer> {
    const createdCat = new this.customerModel(createCatDto);

    return await createdCat.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async findById(id): Promise<Customer> {
    return await this.customerModel.findById(new Types.ObjectId(id)).exec();
  }

  async delete(id) {
    return await this.customerModel.deleteOne({ _id: id }).exec();
  }
}
