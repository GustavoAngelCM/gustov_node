import { gql } from 'apollo-server';

export const typeDefs = gql`

  # type definitions
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
    created_at: Date
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

  # input rules
  input DateI {
    timestamp: Int!
  }

  input PriceI {
    now_price: Float!
    offer_price: Float
    before_price: Float
  }

  input DishI {
    name: String!
    detail: String
    price: PriceI!
  }

  input DishesForMenuI {
    dish: DishI!
    prepared_quantity: Int
  }

  input MenuI {
    date_menu: DateI!
    dishes: [DishesForMenuI!]!
  }

  input OrderI {
    dish: DishI!
    amount: Int!
    description: String
    sub_total: Float!
  }

  input SaleI {
    orders: [OrderI!]!
    total: Float!
  }

  input SalesHistoryI {
    sale_ref: String
    menu_ref: String
    status_in_transaction: Boolean
    amount: Int
    price_involved: Float
  }
  
  # query
  type Query {
    getDishes: [Dish]
  }

  # mutations
  type Mutation {
    newDish(dish: DishI): Dish
  }
`;