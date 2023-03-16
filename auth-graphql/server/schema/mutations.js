const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
} = graphql

const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    signOut: {
      type: UserType,
      resolve(parentValue, args, req) {
        const user = req.user
        req.logout(function (error) {
          if (error) {
            console.error(error)
          }
        })
        return user
      }
    },
    signIn: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      }
    }
  }
})

module.exports = mutation