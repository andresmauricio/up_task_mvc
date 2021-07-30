export default {
  port: process.env.PORT_EXPRESS,
  db_name: process.env.DB_NAME || '',
  db_user: process.env.DB_USER || '',
  db_password: process.env.DB_PASSWORD || '',
  secret_jwt: process.env.SECRET_JWT || '',
}