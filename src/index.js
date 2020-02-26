const { GraphQLServer} = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')


const resolvers = {
    Query: {
        info: () => 'This is an API of a Hackernews Clone',
        feed: (roots, args, context, info) => {
            return context.prisma.links()
        },
    },
    Mutation: {
        post: (roots, args, context) => {
            return context.prisma.createLink({
                url: args.url,
                description: args.description
            })
        }
    }
}



const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log(`server is running on http://localhost:4000`))
