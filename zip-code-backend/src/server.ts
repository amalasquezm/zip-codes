import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { baseSchema } from './graphql/schemas/base-schema';
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Hello world 22');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: baseSchema,
    graphiql: true
  })
);

app.listen(process.env.APP_PORT, () => {
  console.log('Graphql server running');
})

