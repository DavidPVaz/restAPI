const KnexConfig = {

    development: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
            pool: {
                min: 2,
                max: 10
            },
            migrations: {
                directory: './db/migrations'
            },
            seeds: {
                directory: './db/seeds'
            },
            useNullAsDefault: true,
            acquireConnectionTimeout: 1000
        }
    }
};

export { KnexConfig };