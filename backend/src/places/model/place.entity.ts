import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PlaceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pais: string;

  @Column()
  local: string;

  @Column()
  meta: string;

  @Column()
  url: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
