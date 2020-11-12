import { Controller, Get, HttpException, HttpStatus, Delete, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}
        




    @Get('all')
    public async getProducts(): Promise<[]> {
        // const products = await this.productService.getProducts();
        // return products;
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
    }

    @Post()
    createProduct(
        @Body(ValidationPipe) Product: CreateProductDTO ){
        return this.productService. createProduct(Product)
    }
    @Patch(':id')
  updateProduct(@Param('id') id, @Body() updateInfo: CreateProductDTO) {
    //     console.log(`updatedUser  ${id}`,this.userService.updateUser(id,updateInfo));
    return this.productService.updateProduct(id, updateInfo);
  }

  @Post()
  createProduct(@Body() details: productEntity) {
    console.log('createUser');
    return this.productService.createProduct(details);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id) {
   return this.productService.deleteProduct(id);
  }

  @Post('authentication')
  validateProduct(@Body('username')username:string,@Body('password')password:string){
console.log("username:  "+username,"password:  "+password);

        return this.productService.getByUserAndPassword(username,password)
  
}
