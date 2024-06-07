import { EntityRepository, Repository } from 'typeorm';
import { Employee } from '';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  async findHierarchyById(id: number): Promise<Employee> {
    return this.findOne(id, { relations: ['children'] });
  }
}