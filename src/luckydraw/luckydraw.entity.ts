import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';

@Entity('luckydraw')
export class LuckydrawEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mobile: string;

  @Column()
  code: string;
}