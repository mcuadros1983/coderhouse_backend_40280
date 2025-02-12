import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { CreateProductDto } from 'src/dto/createProduct.dto';
  import { UpdateProductDto } from 'src/dto/updateProduct.dto';
  import ProductInterface from 'src/interfaces/product.interface';
  import { ProductsService } from './products.service';
  
  @Controller('api/products')
  export class ProductsController {
    constructor(private readonly productService: ProductsService) {}
  
    @Post()
    async create(
      @Body() createProductDto: CreateProductDto,
    ): Promise<ProductInterface> {
      return this.productService.create(createProductDto);
    }
  
    @Get()
    async findAll(): Promise<ProductInterface[]> {
      return this.productService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productService.findOne(+id);
    }
  
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() updateProductDto: UpdateProductDto,
    ) {
      return this.productService.update(+id, updateProductDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.productService.remove(+id);
    }
  }
  