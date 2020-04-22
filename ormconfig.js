const { resolve } = require('path');

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'admin',
  database: process.env.DB_NAME || 'mydatabase',
  synchronize: false,
  logging: true,
  entities: ['src/database/entitys/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  subscribers: ['src/database/subscribers/*.ts'],
  cli: {
    entitiesDir: 'src/database/entitys',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/database/subscribers',
  },
};
