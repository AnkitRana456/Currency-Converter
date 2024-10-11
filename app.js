const BASE_URL =
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/`;


  json = fetchJSON(`${BASE_URL}/currencies/${fromCurrency}`)
  rate = json[fromCurrency][toCurrency]

