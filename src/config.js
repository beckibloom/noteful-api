module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DATABASE_URL || 'postgresql://dunder-mifflin@localhost/noteful',
    TEST_DB_URL: process.env.TEST_DB_URL || 'postgresql://dunder-mifflin@localhost/noteful-test',
    DB_HOST: process.env.MIGRATION_DB_HOST,
    DB_USER: process.env.MIGRATION_DB_USER,
    DB_PASS: process.env.MIGRATION_DB_PASS,
    DB_NAME: process.env.MIGRATION_DB_NAME
}