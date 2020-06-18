import dotenv from  'dotenv';
import { users, notes } from '../db';
import express from 'express';
import apolo from 'apollo-server-express';

import { typeDefs } from './schema';
import resolvers from './resolvers';
import  {
  LowerCaseDirective,
  IsAuthDirective,
  HasRoleDirective,
} from './directives';
import  AuthService from './services/AuthService';

const {ApolloServer} = apolo;

// applay .evn  
dotenv.config()

const app = express();


app.get('/', (req,res) => {
  res.send('dupa');
}) 

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers: {

  },
  schemaDirectives: {
    lower: LowerCaseDirective,
    isAuth: IsAuthDirective,
    hasRole: HasRoleDirective,
  },
  context: ({ req }) => {
    const user = AuthService.getUser(req);
    return { user, db: { users, notes } };
  },
});
server.applyMiddleware({ app });


app.listen({ port: process.env.PORT }, "0.0.0.0" , (a,b) => console.log('Server started',  process.env.PORT,a ));
