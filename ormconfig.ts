
export default {
  name: "default",
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  entities: [
    "src/modules/**/infra/typeorm/entities/*.ts"
  ],
  migrations: [
    "src/shared/infra/typeorm/migrations/*.ts"
  ],
  cli: {
    "migrationsDir": "src/shared/infra/typeorm/migrations"
  }

}