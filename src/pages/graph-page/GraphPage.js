import React from "react";
import { getMainDefinition } from "@apollo/client/utilities";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    split,
    HttpLink,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import GraphData from "../../components/graph-data/GraphData";

const GraphPage = () => {
    const wsLink = new WebSocketLink({
        uri: "ws://localhost:4000/graphql",
        options: {
            reconnect: true,
        },
    });

    const httpLink = new HttpLink({
        uri: "http://localhost:4000/graphql",
    });

    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === "OperationDefinition" &&
                definition.operation === "subscription"
            );
        },
        wsLink,
        httpLink
    );

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: splitLink,
    });

    return (
        <ApolloProvider client={client}>
            <GraphData />
        </ApolloProvider>
    );
};

export default GraphPage;
