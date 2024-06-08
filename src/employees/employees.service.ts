// src/employees/employees.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from './entities/employees.entity';

@Injectable()
export class EmployeesService {
  private readonly logger = new Logger(EmployeesService.name);

  constructor(
    @InjectRepository(Employees)
    private readonly employeeRepository: Repository<Employees>,
  ) {}

  async findAllUnderPosition(positionId: number): Promise<Employees[]> {
    this.logger.log(`Fetching hierarchy for employee position ID: ${positionId}`);

    const rootEmployee = await this.employeeRepository.findOne({
      where: { positionId },
      relations: ['children'],
    });

    if (!rootEmployee) {
      this.logger.error(`Employee with position ID ${positionId} not found`);
      throw new Error('Employee not found');
    }

    const hierarchy = await this.buildHierarchy(rootEmployee);
    return [hierarchy]; // Return as an array
  }

  private async buildHierarchy(employee: Employees): Promise<Employees> {
    const children = await this.employeeRepository.find({
      where: { parent: { id: employee.id } },
      relations: ['children'],
    });

    employee.children = await Promise.all(
      children.map(child => this.buildHierarchy(child))
    );

    return employee;
  }
}
