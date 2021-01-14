import Web3 from 'web3'
import {store} from '../store/'
import {BigNumber} from 'bignumber.js'
import {DebtTokenAddr, DebtTokenABI} from '../util/constants/DebtTokenABI'

let pollMyTokens = function (state) {
    let web3 = window.web3
    web3 = new Web3(web3.currentProvider)
    var MerittContract = store.state.MerittContract()
    var coinbase = store.state.web3.coinbase
    function LoansInstance () {
      var myLoansContract = []
      MerittContract.methods.merittLoans().call({from: coinbase}).then(
        (res) =>
        {
          if (res.length == 0) {
            store.dispatch('tab4TableDataAction',false)
          }
          for (var j = 0; j < res.length; j++) {
            let myLoanInstance = new web3.eth.Contract(DebtTokenABI, res[j])
            myLoansContract.push(myLoanInstance)
            if(j+1 === res.length) {
              return tableData(myLoansContract, res)
            }
          }
        }
      )
    }
    function tableData (contractInstance,loans) {
      var data = []
      var basicData = []
      var paymentDetails = []
      var count = 0
      contractInstance.forEach(function (contract, key) {
        contract.methods.payer().call().then((res)=>{
          count++
          if(res != web3.utils.toChecksumAddress(coinbase)){
            contract.methods.balanceOf(coinbase).call().then((tokenBalance)=>{
              if (tokenBalance != 0) {
                Promise.all([
                  contract.methods.maturityAmount().call(),
                  contract.methods.initiationDate().call(),
                  contract.methods.interestRate().call(),
                  contract.methods.maturityDate().call(),
                  contract.methods.totalPayments().call(),
                  contract.methods.term().call(),
                  contract.methods.symbol().call(),
                  contract.methods.availableFunds(coinbase).call()
                ]).then(([maturityAmount, initiationDate, interestRate, maturityDate, totalPayments, term, symbol, availableFunds]) => {
                    var data = {}
                    data.tokenBalance = new BigNumber(web3.utils.fromWei(tokenBalance, 'ether')).toNumber()
                    data.maturityAmount = new BigNumber(web3.utils.fromWei(maturityAmount, 'ether')).toNumber()
                    data.interestRate = interestRate
                    initiationDate = initiationDate * 1000
                    data.initiationDate = (new Date(initiationDate).getDate() + '/' + new Date(initiationDate).getMonth() + '/' + new Date(initiationDate).getFullYear())
                    maturityDate = maturityDate * 1000
                    data.maturityDate = (new Date(maturityDate).getDate() + '/' + new Date(maturityDate).getMonth() + '/' + new Date(maturityDate).getFullYear())
                    data.loan = loans[key]
                    data.symbol = symbol
                    var childPayment = []
                    if(availableFunds > 0){
                      var payObj = {}
                      payObj.availableFunds = ((new BigNumber(availableFunds / (1 * (10**18)))).toNumber()).toFixed(2)
                      payObj.flag  = 'Withdraw'
                      payObj.class  = 'text-green'
                      data.payment = payObj
                      childPayment.push(payObj)
                      data.payment = childPayment
                      basicData.push(data)
                    } else {
                      var payObj = {}
                      payObj.flag  = 'No funds available'
                      payObj.class  = 'text-warning'
                      data.payment = payObj
                      childPayment.push(payObj)
                      data.payment = childPayment
                      basicData.push(data)
                    }
                    if(count == contractInstance.length) {
                      store.dispatch('tab4TableDataAction',basicData)
                    }
                })
              }else{
                if(count == contractInstance.length) {
                  if(basicData.length == 0){
                    store.dispatch('tab4TableDataAction',false)
                  } else {
                    store.dispatch('tab4TableDataAction',basicData)
                  }
                }
              }
            })
          }
          else {
            if(count == contractInstance.length) {
              if(basicData.length == 0){
                store.dispatch('tab4TableDataAction',false)
              } else {
                store.dispatch('tab4TableDataAction',basicData)
              }
            }
          }
        })
      })
    }
    LoansInstance()
}
export default pollMyTokens
