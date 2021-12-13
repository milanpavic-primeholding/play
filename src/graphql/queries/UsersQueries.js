import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragments/UserFragment";

export const QUERY_ALL_USERS = gql`
    ${USER_FRAGMENT}
    query Users {
        users {
            ...UserFragment
        }
    }
`;
