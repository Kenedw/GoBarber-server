import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateUsers1587594761155 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'email',
            type: 'string',
            isUnique: true,
          },
          {
            name: 'password_hash',
            type: 'string',
          },
          {
            name: 'provider',
            type: 'boolean',
            default: false,
          },
          {
            name: 'avatar_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'create_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'usersAvatar',
        columnNames: ['avatar_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'files',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'usersAvatar');

    await queryRunner.dropTable('users');
  }
}
