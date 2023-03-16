const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    dummyField: { type: GraphQLID }
  })
})

module.exports = RootQuery;
