# Engine

Cerberus Engine.

## How To Run

1. first, run blockchain local node or to deploy in prod
2. git clone
3. cd engine
4. npm install
5. copy .env.example as .env
6. fill .env variables (attention to blockchain vars)
7. run the database on replica mode
8. npm run seeder
9. npm start

## How to Run DB (replica mode)

1. download Community Server zip: https://www.mongodb.com/try/download/community
2. cd "mongodb/bin" folder
3. ./mongod --dbpath <your data folder> --replSet rs0
4. download Mongo Shell zip: https://www.mongodb.com/products/tools/shell
5. in another terminal, cd "mongoshell/bin" folder
6. ./mongosh
7. rs.initiate({\_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]})
8. MongoDB is ready for connections. Next time, just run step 3 above
