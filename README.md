# Employee Organogram API

## Description

This API returns the hierarchical structure of employees under a given position in an organization. It supports fetching nested employee relationships and provides an endpoint to fetch the hierarchy based on position ID.

## Features

- Fetch hierarchical employee data
- Supports nested relationships (children of children)
- JWT token authorization for secure access
- Optimized for high performance and scalability

## Technologies Used

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)
- PostgreSQL (>= 11.x)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:niloyinzamum/employee-organogram-nestjs.git

2. Install dependencies::

   ```bash
   npm install  

3. Create a PostgreSQL database:

   ```bash
   createdb employees     

4. Configure database connection in src/app.module.ts:

  TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'employees',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // should be false in production
})
      
######################################################################################################################      
# Start the development server:

  ```bash
  npm run start:dev

# The API will be available at http://localhost:3000.

Testing

```bash
npm run test

## End-to-End Tests
```bash
npm run test:e2e


# API Endpoints
1. Get Employee Hierarchy
URL: /employees/:positionId
Method: GET
URL Params:
positionId - ID of the employee position to fetch the hierarchy for

Example Request:
GET http://localhost:3000/employees/1  

Example Response: 
[
  {
    "id": 1,
    "name": "CTO",
    "positionId": 1,
    "positionName": "CTO",
    "children": [
      {
        "id": 2,
        "name": "Name 2",
        "positionId": 2,
        "positionName": "Senior software eng",
        "children": [
          {
            "id": 3,......

2. Check protected API
URL: /employees/protected  
POST http://localhost:3000/employees/protected           

#########################################################################################################################

# Deployment
npm run build
npm run start:prod
``` The other details for deployement procedure is noted below in the other sections.

# To scale the application 
  Let's say on Amazon Ec2 we could use services that provides both vertical and horizontal scaling. If running on local, we could use nginx to load balance different instances of the application deployed in containers.
  We could also use in-memory caching machanism (ie: Redis) to add more robustness to the system.

# Monitoring and logging:
  Monitoring and logging has been added accordingly however there are room for improvement. Logging and Monitoring could be implemented to log every single request response which whould help to inspect in case any anomalies emerges in post deployement.

# Addressing the questions and more on deployment:
  I utilized a NestJs application with a typeOrm data layer to solve the problem. Through replational queries and filtering out the information taken from the query result I tried to ensure efficient retrieval of hierarchical data. If we had used a non-sql database, in this case jotting down the data into a place would be a faster way to retrieve the data because we will then taking data from one document. 

#More on logging and monitoring:
  As the application increases in complexity tools (strategic) like dashboarding and log retention and alerting can be used to make monitoring and logging more effecient and effective.

# To help secure the secret keys (in this case not present) I could have used a .env file and shared it separetely. Moreover, the secret key for jwt has not been kept anywhere, the protected API is there to complete the assesment accordingly.