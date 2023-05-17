import { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { Products } from "@/models/product.model";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
(async () =>
  await mongoose
    .connect(process.env.MONGO_URI as string, {
      dbName: "grcaulma",
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log(err);
    }))();
// mongoose.connect(process.env.MONGO_URI as string, {dbName: "grcaulma",}).then(() => {console.log("MongoDB Connected");}).catch((err) => {console.log(err);})

const typeDefs = gql`
  type Query {
    products: [Product!]!
  }
  type Product {
    _id: ID!
    name: String!
    imgSrc: String!
    type: String
    price: Int!
    category: String
  }
`;

const resolvers = {
  Query: {
    products() {
      //return Products.find().then((products) => products);
      return [
        {
          __typename: "Product",
          _id: "64115659aabbe3224593ba82",
          name: "마이크로닉스 Master M60 메쉬",
          imgSrc:
            "//img.danawa.com/prod_img/500000/167/423/img/10423167_1.jpg?shrink=130:130&_v=20221205130722",
          type: null,
          price: 44540,
          category: "케이스",
        },
      ];
    },
  },
};
const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({
    req,
  }),
});
