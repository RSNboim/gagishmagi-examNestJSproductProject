import { Repository, EntityRepository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    public async createProduct(
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        const { } = createProductDto;

        const product = new Product();

        await product.save();
        return product;
    }

    public async editProduct(
        createProductDto: CreateProductDTO,
        editedProduct: Product,
    ): Promise<Product> {
        const { } = createProductDto;

        await editedProduct.save();

        return editedProduct;
    }


    async getProductById(id: number) {
        const query = this.createQueryBuilder('product');
        query.where('product.id = :id', {id: id})
        const Product = await query.getOne()
        return Product
    }


    async deleteProduct(id){
        const query = this.createQueryBuilder('product');
        query.where('product.id = :id', {id: id}).delete()



    }

    async getAllProducts(){
        const query = this.createQueryBuilder('Products');
        const products =  query.getMany()
        return products
    }
}
