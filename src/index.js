const { GraphQLServer} = require('graphql-yoga')


const resolvers = {
    Query: {
        info: () => 'This is an API of a Hackernews Clone',
        feed: () => links 
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    }
}



const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log(`server is running on http://localhost:4000`))
