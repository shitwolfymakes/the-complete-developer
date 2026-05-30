import gql from "graphql-tag";

export const typeDefs = gql`

    type FriendsType {
        zip: String!
        weather: String!
    }
    
    type LocationWeatherType {
        zip: String!
        weather: String!
        tempC: String!
        tempF: String!
        friends: [FriendsType]!
    }
    
    input LocationWeatherInput {
        zip: String!
        weather: String
        tempC: String
        tempF: String
        friends: [String]
    }

    type Query {
        weather(zip: String): [LocationWeatherType]!
    }

    type Mutation {
        weather(data: LocationWeatherInput): [LocationWeatherType]!
    }
`;