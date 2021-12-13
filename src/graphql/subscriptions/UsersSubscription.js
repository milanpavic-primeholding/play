import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragments/UserFragment";

export const SUBSCRIBE_ALL_USERS = gql`
    ${USER_FRAGMENT}
    subscription Users {
        users {
            ...UserFragment
        }
    }
`;
