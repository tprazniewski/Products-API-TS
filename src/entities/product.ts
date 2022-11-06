import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "varchar",
    length: 100,
  })
  name: string;
  @Column({
    type: "numeric",
    precision: 10,
    scale: 2,
  })
  price: number;

  @UpdateDateColumn()
  updated_at: Date;
}
