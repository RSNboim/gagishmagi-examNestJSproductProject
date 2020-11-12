import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
      productName: string;

      @Column()
      price: number;
  
    
}
