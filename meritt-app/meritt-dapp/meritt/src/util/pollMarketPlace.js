import Web3 from 'web3'
import {store} from '../store/'
import {DebtTokenAddr, DebtTokenABI} from '../util/constants/DebtTokenABI'

let pollMarketPlace = function (state) {
    let web3 = window.web3
    web3 = new Web3(web3.currentProvider)
    var MerittContract = store.state.MerittContract()
    var coinbase = store.state.web3.coinbase
    function LoansInstance () {
      var myLoansContract = []
      MerittContract.methods.merittLoans().call({from: coinbase}).then(
        (res) =>
        {
          for (var j = 0; j < res.length; j++)
          {
            let myLoanInstance = new web3.eth.Contract(DebtTokenABI, res[j])
            myLoansContract.push(myLoanInstance)
            if(j+1 == res.length) {
              return MarketPlace(myLoansContract,res)
            }
          }
        }
      )
    }
    function MarketPlace (contractInstance,loans) {
      var basicData = []
      var count = 0
      contractInstance.forEach(function (contract, key) {
        Promise.all([
          contract.methods.symbol().call(),
          contract.methods.principal().call(),
          contract.methods.funded().call(),
          contract.methods.interestRate().call(),
          contract.methods.term().call()
        ]).then(([symbol, principal, funded, interestRate, term]) => {
          count++
          var data = {}
          data.symbol = symbol
          data.principal = web3.utils.fromWei(principal, 'ether')
          data.funded =((funded / principal) * 100).toPrecision(3)
          data.interestRate = interestRate
          data.loan = loans[key]
          data.term = term
          basicData.push(data)
          if(count == contractInstance.length) {
            store.dispatch('tab4MarketPlaceAction',basicData)
          }
        })
      })
    }
    LoansInstance()
}
export default pollMarketPlace
