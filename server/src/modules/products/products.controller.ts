import { Controller, Get, Param } from '@nestjs/common';

import products, { product } from './../../products';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<product> {
    const product = products.find((p) => p.id === parseInt(id));
    return product;
  }
}
