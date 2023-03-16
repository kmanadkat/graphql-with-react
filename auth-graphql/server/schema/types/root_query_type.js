const graphql = require('graphql');
const UserType = require('./user_type');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      }
    }
  })
})

module.exports = RootQuery;
