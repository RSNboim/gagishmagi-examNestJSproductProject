import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    createProduct(createProductDto: CreateProductDTO): Promise<Product>;
    getProducts(): Promise<Product[]>;
    getProduct(productId: number): Promise<Product>;
    editProduct(productId: number, createProductDto: CreateProductDTO): Promise<Product>;
    deleteProduct(productId: number): Promise<void>;
}
