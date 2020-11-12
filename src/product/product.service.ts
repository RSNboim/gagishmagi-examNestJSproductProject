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

    public async createProduct(
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        return await this.productRepository.createProduct(createProductDto)//create product
    }


    public async getProducts(): Promise<Product[]> {
        return await this.productRepository.getAllProducts();// find all
    }


    public async getProduct(productId: number): Promise<Product> {
        const foundProduct =   this.productRepository.getProductById(productId) //findOne
        if (!foundProduct) {
            throw new NotFoundException('Product not found');
        }
        return foundProduct;
    }


    public async editProduct(
        productId: number,
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
       const current= this.productRepository.getProductById(productId)       
        const editedProduct = this.productRepository.editProduct(createProductDto,current); //find One
        if (!editedProduct) {
            throw new NotFoundException('Product not found');
        }
        return editedProduct ; // Edit Product
    }


    public async deleteProduct(productId: number): Promise<void> {
        await this.productRepository.deleteProduct(productId) // delete product
    }
}
