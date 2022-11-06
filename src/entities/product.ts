import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
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
