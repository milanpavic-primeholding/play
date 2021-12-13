import React, { useEffect, useState } from "react";
import {
    useQuery,
    useLazyQuery,
    useMutation,
    useSubscription,
} from "@apollo/client";
import { QUERY_ALL_USERS } from "../../graphql/queries/UsersQueries";
import {
    QUERY_ALL_MOVIES,
    QUERY_MOVIE,
} from "../../graphql/queries/MoviesQueries";
import { CREATE_USER_MUTATION } from "../../graphql/mutations/UsersMutation";
import { SUBSCRIBE_ALL_USERS } from "../../graphql/subscriptions/UsersSubscription";

const GraphData = () => {
    const [movie, setMovie] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [nat, setNat] = useState("");

    const {
        data: dataUsers,
        loading: loadingUsers,
        error: errorUsers,
        refetch,
    } = useSubscription(SUBSCRIBE_ALL_USERS);
    const [createUser] = useMutation(CREATE_USER_MUTATION);

    const [fetchMovie, { data: dataMovie }] = useLazyQuery(QUERY_MOVIE);
    const { data: dataMovies, loading: loadingMovies } =
        useQuery(QUERY_ALL_MOVIES);

    useEffect(() => {
        fetchMovie({
            variables: {
                name: movie,
            },
        });
    }, [movie, fetchMovie]);

    if (loadingUsers || loadingMovies) {
        return <div>loading...</div>;
    }
    if (errorUsers) {
        console.log(errorUsers);
    }
    if (dataUsers) {
        console.log(dataUsers);
    }
    return (
        <div>
            {dataUsers && dataUsers.users.map((user) => user.name)}
            {dataMovies && dataMovies.movies.map((movie) => movie.name)}
            <input
                type="text"
                placeholder="movie"
                onChange={(event) => setMovie(event.target.value)}
            />
            {dataMovie && <div>MovieName: {dataMovie?.movie?.name}</div>}
            name: String! username: String!
            <input
                type="text"
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="text"
                placeholder="username"
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="text"
                placeholder="age"
                onChange={(event) => setAge(event.target.value)}
            />
            <input
                type="text"
                placeholder="nationallity"
                onChange={(event) => setNat(event.target.value)}
            />
            <button
                onClick={() => {
                    createUser({ variables: { input: { name, username } } });
                    // refetch();
                }}
            >
                create user
            </button>
        </div>
    );
};

export default GraphData;
