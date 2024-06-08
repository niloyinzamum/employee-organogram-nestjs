import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Employees {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  positionId: number;

  @Column()
  positionName: string;

  @ManyToOne(() => Employees, employee => employee.children)
  parent: Employees;

  @OneToMany(() => Employees,employee => employee.parent)
  children: Employees[];
}
