/* eslint-disable no-new */
import Web3 from 'web3'

let getWeb3 = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  var web3js = window.web3
  if (typeof web3js !== 'undefined') {
    var web3 = new Web3(web3js.currentProvider)
    resolve({
      // injectedWeb3: web3.isConnected(),
      web3 () {
        return web3
      }
    })
  } else {
    alert('asd')
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
    reject(new Error('Unable to connect to Metamask'))
  }
}).then(result => {
  return new Promise(function (resolve, reject) {
    // Retrieve coinbase
    result.web3().eth.getCoinbase((err, coinbase) => {
      if (err) {
        reject(new Error('Unable to retrieve coinbase'))
      } else {
        result = Object.assign({}, result, { coinbase })
        resolve(result)
      }
    })
  })
}).then(result => {
  return new Promise(function (resolve, reject) {
    // Retrieve balance for coinbase
    result.web3().eth.getBalance(result.coinbase, (err, Balance) => {
      if (err) {
        reject(new Error('Unable to retrieve balance for address: ' + result.coinbase))
      } else {
        result = Object.assign({}, result, { Balance })
        resolve(result)
      }
    })
  })
})
export default getWeb3
