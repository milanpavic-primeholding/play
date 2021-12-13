import { gql } from "@apollo/client";

export const QUERY_MOVIE = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            name
        }
    }
`;

export const QUERY_ALL_MOVIES = gql`
    query Movies {
        movies {
            name
        }
    }
`;
