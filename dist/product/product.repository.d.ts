import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
export declare class ProductRepository extends Repository<Product> {
    createProduct(createProductDto: CreateProductDTO): Promise<Product>;
    editProduct(createProductDto: CreateProductDTO, editedProduct: Product): Promise<Product>;
}
