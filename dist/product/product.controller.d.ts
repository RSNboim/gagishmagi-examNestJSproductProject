import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    createProduct(Product: CreateProductDTO): Promise<Product>;
    updateProduct(id: any, updateInfo: CreateProductDTO): Promise<Product>;
    deleteProduct(id: any): Promise<void>;
}
