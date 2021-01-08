import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1609844638154
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // dentro do metodo up nos vamos colocar oque agente quer colocar dentro do banco de dados quando essa migration for executada

    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp sith time zone',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Dentro do metodo down se acontecer algum problema para desfazer dentro do metodo up
    // defazer
    await queryRunner.dropTable('appointments');
  }
}
