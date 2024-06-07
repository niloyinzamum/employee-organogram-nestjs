import { Controller, Get } from '@nestjs/common';

@Controller('employees')
export class EmployeesController {
    @Get()
    getEmployees(): string {
        return 'working employees';
    }
}
