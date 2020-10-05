# Luckydraw API

## Installation
Install dependencies
    
    npm install

Copy config file and set JsonWebToken secret key

    cp src/config.ts.example src/config.ts
    
----------

## Database

Copy TypeORM config example file for database settings

    cp ormconfig.json.example
    
Set mysql database settings in ormconfig.json

    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "your-mysql-username",
      "password": "your-mysql-password",
      "database": "learn-nest",
      "entities": ["src/**/**.entity{.ts,.js}"],
      "synchronize": true
    }
    

----------

## NPM scripts

- `npm start` - Start application
- `npm run start:watch` - Start application in watch mode
- `npm run test` - run Jest test runner 
- `npm run start:prod` - Build application

----------

----------

##### Prisma

----------

Copy prisma config example file for database settings

    cp prisma/.env.example prisma/.env

Set mysql database settings in prisma/.env

    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

To create all tables in the new database make the database migration from the prisma schema defined in prisma/schema.prisma

    npx prisma migrate save --experimental
    npx prisma migrate up --experimental

Now generate the prisma client from the migrated database with the following command

    npx prisma generate

----------

##### API Document

----------

    http://localhost:3000/docs
    
