import Web3 from 'web3'
import {store} from '../store/'
import {BigNumber} from 'bignumber.js'
import {MerittTokenAddr, MerittTokenABI} from '../util/constants/MerittTokenABI'

let pollMeritt = function (state) {
  setInterval(() => {
    let web3 = window.web3
    var coinbase = store.state.web3.coinbase
    web3 = new Web3(web3.currentProvider)
    let MerittTokenContract = new web3.eth.Contract(MerittTokenABI, MerittTokenAddr)
    if (MerittTokenContract) {
      Promise.all([
        MerittTokenContract.methods.balanceOf(coinbase).call(),
        MerittTokenContract.methods.name().call()
      ]).then(([merittBalance, merittSymbol]) => {
        merittBalance = merittBalance / (1 * (10**18))
        var array = [merittBalance, merittSymbol]
        store.dispatch('tab2MerittAction',array)
      })
    } else {
      store.dispatch('tab2MerittAction',false)
    }
  }, 500)
}
export default pollMeritt
