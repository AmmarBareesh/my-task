const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const resolvers = {
  Query: {
    getClasses: () => classes,
    searchClasses: () => classes,
  },
};

app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
