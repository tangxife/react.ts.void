import React from "react"
import { useQuery, gql } from "@apollo/client"

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const ExchangeRates: React.FC = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  console.log(loading, error, data)
  return <></>
}

export default ExchangeRates
