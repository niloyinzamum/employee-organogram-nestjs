import { Controller, Get, Param, UseGuards, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { JwtAuthGuard } from '../auth/gaurds/jwt-auth.gaurd';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get(':id')
  async getEmployeeHierarchy(@Param('id') id: number) {
    let result : Object;
    result = this.employeeService.findAllUnderPosition(Number(id))
    return result;
  }

  @Post('/protected')
  @UseGuards(JwtAuthGuard)
  async protectedApi(@Param('id') id: number) {
    return 'Accessed protected api successfully!';
  }
}
