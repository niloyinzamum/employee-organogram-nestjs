export default {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'employeeAdmin',
    password: 'employeeAdminPassword',
    database: 'employees_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };