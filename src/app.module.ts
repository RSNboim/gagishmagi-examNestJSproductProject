import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: '????',
      host: '?????',
      port: '?????',
      username: '??????',
      password: '??????',
      database: 'test_db',
      entities: '??',
      synchronize: '?????',
    }),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
