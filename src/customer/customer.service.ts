import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './customer';
import { throwError } from 'rxjs';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async create(createCatDto: any): Promise<Customer> {
    const createdCat = new this.customerModel(createCatDto);

    return await createdCat.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async findById(id): Promise<Customer> {
    return await this.customerModel.findById(id).exec();
  }
}
