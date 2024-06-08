// src/employee/employee.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from './employees.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Employees } from './entities/employees.entity';
import { Repository } from 'typeorm';

describe('EmployeeService', () => {
  let service: EmployeesService;
  let repo: Repository<Employees>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesService,
        {
          provide: getRepositoryToken(Employees),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
    repo = module.get<Repository<Employees>>(getRepositoryToken(Employees));
  });

  it('should return employee hierarchy', async () => {
    const employee: Employees = {
      id: 1,
      name: 'Name 1',
      positionId: 1,
      positionName: 'CTO',
      parent: null,
      children: [],
    };
    jest.spyOn(repo, 'find').mockResolvedValueOnce([employee]);

    expect(await service.findAllUnderPosition(1)).toEqual([employee]);
  });
});
