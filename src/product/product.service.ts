import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
    ) { }

    public async createProduct(createProductDto: CreateProductDTO,): Promise<Product> {
        return await this.productRepository.createProduct(createProductDto)//create product
    }


    public async getProducts(): Promise<Product[]> {
        return await this.productRepository.find();// find all
    }


    public async getProduct(productId: number): Promise<Product> {
        const foundProduct =   this.productRepository.findOne(productId) //findOne
        if (!foundProduct) {
            throw new NotFoundException('Product not found');
        }
        return foundProduct;
    }


    public async  editProduct(
        productId: number,
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
       const editedProduct=  await this.productRepository.findOne(productId)       
        // const editedProduct = this.productRepository.editProduct(createProductDto,current); //find One
        if (!editedProduct) {
            throw new NotFoundException('Product not found');
        }
        return this.productRepository.editProduct(createProductDto,editedProduct); ; // Edit Product
    }


    public async deleteProduct(productId: number): Promise<void> {
        await this.productRepository.delete(productId) // delete product
    }
}
