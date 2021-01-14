import Web3 from 'web3'
import {store} from '../store/'
import {BigNumber} from 'bignumber.js'
import {DebtTokenAddr, DebtTokenABI} from '../util/constants/DebtTokenABI'

let pollMyWallet = function (state) {
    function MyWallet() {
      var ETHRate
      fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(res => res.json())
      .then(data => {
        ETHRate = data[0].price_usd
        let web3 = window.web3
        web3 = new Web3(web3.currentProvider)
        var MerittContract = store.state.MerittContract()
        var coinbase = store.state.web3.coinbase
        var array = []
        var count = 0
        var cont = 0
        MerittContract.methods.merittLoans().call().then((res) => {
          var merittLoansContract = []
          for (var i = 0; i < res.length; i++) {
            let merittLoanInstance = new web3.eth.Contract(DebtTokenABI, res[i])
            merittLoansContract.push(merittLoanInstance)
          }
          (async function(){
            for (var i = 0; i < merittLoansContract.length; i++) {
              await merittLoansContract[i].methods.balanceOf(coinbase).call().then((tokenBalance)=>{
                if (tokenBalance != 0) {
                  Promise.all([
                    merittLoansContract[i].methods.symbol().call(),
                    merittLoansContract[i].methods.interestRate().call(),
                    merittLoansContract[i].methods.maturityDate().call()
                  ]).then(([symbol, interestRate, maturityDate]) => {
                    var tokenBal = new BigNumber(web3.utils.fromWei(tokenBalance, 'ether')).toNumber()
                    var tokenBalUSD = (new BigNumber(tokenBal * ETHRate).toNumber()).toFixed(0)
                    var arr = [symbol, interestRate, tokenBal, tokenBalUSD, res[cont]]
                    array.push(arr)
                    cont++
                  })
                  count++
                  if(count == merittLoansContract.length) {
                    store.dispatch('tab2TableDataAction',array)
                  }
                }
                else {
                  count++
                  if(count == merittLoansContract.length) {
                    store.dispatch('tab2TableDataAction',array)
                  }
                }
              })
            }
          })(i)
        })
      })
    }
    MyWallet()
}
export default pollMyWallet
