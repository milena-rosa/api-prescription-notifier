console.log('process.env.DATABASE_URL :>>', process.env.DATABASE_URL)
module.exports = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  ssl: true,
  migrations: ['dist/shared/infra/typeorm/migrations /*.ts'],
  entities: ['dist/modules/**/entities/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations'
  }
}
