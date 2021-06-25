import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Date {
    timestamp: Int!
  }

  type Price {
    now_price: Float!
    offer_price: Float
    before_price: Float
  }

  type Dish {
    id: ID
    name: String!
    detail: String
    price: Price!
    created_at: Date
  }

  type DishesForMenu {
    id: ID
    dish: Dish
    prepared_quantity: Int
  }

  type Menu {
    id: ID
    date_menu: Date!
    dishes: [DishesForMenu!]!
    state: Boolean
    created_at: Date
  }

  type Order {
    id: ID
    dish: Dish!
    amount: Int!
    description: String
    sub_total: Float!
    created_at: Date
  }

  type Sale {
    id: ID
    orders: [Order!]!
    total: Float!
    cancelled: Boolean
    created_at: Date
  }

  type SalesHistory {
    id: ID
    sale_ref: String
    menu_ref: String
    status_in_transaction: Boolean
    amount: Int
    price_involved: Float
    created_at: Date
  }
`;