import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from './customer/customer.service';
import { Customer, CustomerSchema } from './customer/customer';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://metrooncoworking:metrooncoworking2022@cluster0.1d82cra.mongodb.net/test',
    ),
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
