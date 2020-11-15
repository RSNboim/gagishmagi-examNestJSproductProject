import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        name: string;

      @Column()
      price: string;
     
     
      @Column()
      description:string;
    
}
