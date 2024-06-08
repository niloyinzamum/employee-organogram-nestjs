// src/migration/1639650479590-CreateEmployees.ts
import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEmployees1639650479590 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "employee" (
                "id" SERIAL NOT NULL,
                "name" VARCHAR NOT NULL,
                "positionId" INT NOT NULL,
                "positionName" VARCHAR NOT NULL,
                "parentId" INT,
                PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
