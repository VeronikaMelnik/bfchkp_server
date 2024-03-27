import { MigrationInterface, QueryRunner } from 'typeorm';
import { hash } from 'bcryptjs';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';
dotenv.config();

export class migrations1667991225370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await hash('Admin123!', Number(process.env.HASH_ROUNDS));
    const result = await queryRunner.query(
      `INSERT INTO "persons" ("name", "lastName")
      VALUES ('admin', 'admin') RETURNING id`,
      );
      const person: number = result[0].id
      Logger.warn(`personId: ${person}`, 'Person');
    await Promise.all([
      queryRunner.query(
        `INSERT INTO "users" ("email", "password", "personId")
        VALUES ('admin@admin.com', '${password}', '${person}');`,
      ),
      queryRunner.query(
        `INSERT INTO "admins" ("personId")
        VALUES ('${person}');`,
      ),

    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "users" WHERE "email" = \'admin@admin.com\'');
    /* await Promise.all([
      queryRunner.query('DELETE FROM "users" WHERE "email" = \'admin@admin.com\'')
    ]) */
  }
}
