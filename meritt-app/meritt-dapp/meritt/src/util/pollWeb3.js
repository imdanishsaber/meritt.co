import Web3 from 'web3'
import {store} from '../store/'

let pollWeb3 = function (state) {
  let web3 = window.web3
  web3 = new Web3(web3.currentProvider)

  setInterval(() => {
    web3.eth.getCoinbase((err, coinbase) => {
      if (err) {
        reject(new Error('Unable to retrieve coinbase'))
      } else {
        if (coinbase !== store.state.web3.coinbase) {
          let newCoinbase = coinbase
          web3.eth.getBalance(coinbase, function (err, newBalance) {
            if (err) {
              console.log(err)
            } else {
              fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(res => res.json())
                .then(data => {
                  var ETHUSD = data[0].price_usd
                  var newBalanceUSD = ETHUSD * newBalance
                  store.dispatch('pollWeb3', {
                    coinbase: newCoinbase,
                    balance: newBalance,
                    balanceUSD: newBalanceUSD
                  })
                  location.reload()
                })
            }
          })
        } else {
          web3.eth.getBalance(store.state.web3.coinbase, (err, polledBalance) => {
            if (err) {
              console.log(err)
            } else if (parseInt(polledBalance, 10) !== store.state.web3.balance) {
              fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(res => res.json())
                .then(data => {
                  var ETHUSD = data[0].price_usd
                  var polledBalanceUSD = ETHUSD * polledBalance
                  store.dispatch('pollWeb3', {
                    coinbase: store.state.web3.coinbase,
                    balanceUSD: polledBalanceUSD,
                    balance: polledBalance,
                  })
                })
            }
          })
        }
      }
    })
  }, 500)
}

export default pollWeb3
