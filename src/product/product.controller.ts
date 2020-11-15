import { Controller, Get, HttpException, HttpStatus, Delete, Post, Body, ValidationPipe, Patch, Param } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}
        




    @Get('all')
    public async getProducts(): Promise<Product[]> {
        const products = await this.productService.getProducts();
              return products
    } 

    @Get(':id')
    public async getProductById(@Param()id:number): Promise<Product> {
        const product = await this.productService.getProduct(id);
        if (!product){
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);}
       else{return product
    }} 
    @Post()
    createProduct(
        @Body(ValidationPipe) Product: CreateProductDTO ){
        return this.productService. createProduct(Product)

    }
    @Patch(':id')
  updateProduct(@Param('id') id, @Body() updateInfo: CreateProductDTO) {
    return this.productService.editProduct(id, updateInfo);
  }

  
  @Delete(':id')
  deleteProduct(@Param('id') id) {
   return this.productService.deleteProduct(id);
  }

//   @Post('authentication')
//   validateProduct(@Body('username')username:string,@Body('password')password:string){
// console.log("username:  "+username,"password:  "+password);

//         return this.productService.getByUserAndPassword(username,password)
  
}
