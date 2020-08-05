import schema from "./schema";
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
  schema,
});

server.listen(3000).then(({ url }) => console.log(`Server running at ${url} `));
