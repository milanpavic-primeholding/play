const { UserList, Movies } = require("./FakeData");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

// All functions that do something in our API
const resolvers = {
    Query: {
        // User resolvers
        users: () => {
            // Make api call
            return UserList;
        },
        user: (_, args) => {
            return UserList.find((user) => user.id === args.id);
        },

        // Movie resolvers
        movies: () => {
            return Movies;
        },
        movie: (_, args) => {
            return Movies.find((movie) => movie.name === args.name);
        },
    },

    User: {
        favoriteMovies: () => {
            return [Movies[0]];
        },
    },

    Mutation: {
        createUser: (_, args) => {
            const user = args.input;
            const lastId = +UserList[UserList.length - 1].id;
            user.id = String(lastId + 1);
            UserList.push(user);
            pubsub.publish("USER_CREATED", { users: UserList });
            return user;
        },
    },

    Subscription: {
        users: {
            subscribe: (parent, args) => {
                console.log("runned", parent, args);
                setTimeout(
                    () => pubsub.publish("USER_CREATED", { users: UserList }),
                    0
                );
                return pubsub.asyncIterator(["USER_CREATED"]);
            },
        },
    },
};

module.exports = { resolvers };
