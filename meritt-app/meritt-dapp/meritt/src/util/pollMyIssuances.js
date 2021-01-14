import Web3 from 'web3'
import {store} from '../store/'
import {BigNumber} from 'bignumber.js'
import {DebtTokenAddr, DebtTokenABI} from '../util/constants/DebtTokenABI'

let pollMyIssuances = function (state) {
    let web3 = window.web3
    web3 = new Web3(web3.currentProvider)
    var MerittContract = store.state.MerittContract()
    var coinbase = store.state.web3.coinbase
    function LoansInstance () {
      var myLoansContract = []
      MerittContract.methods.myLoans().call({from: coinbase}).then(
        (res) =>
        {
          if (res.length == 0) {
            store.dispatch('tab3TableDataAction',false)
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
    LoansInstance()
    function tableData (contractInstance,loans) {
      var ETHRate
      fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(res => res.json())
        .then(data => {
          ETHRate = data[0].price_usd
      var basicData = []
      var paymentDetails = []
      var count = 0
      contractInstance.forEach(function (contract, key) {
        count++
        Promise.all([
          contract.methods.maturityAmount().call(),
          contract.methods.initiationDate().call(),
          contract.methods.interestRate().call(),
          contract.methods.maturityDate().call(),
          contract.methods.totalPayments().call(),
          contract.methods.term().call()
        ]).then(([maturityAmount, initiationDate, interestRate, maturityDate,totalPayments,term]) => {
            var data = {}
            data.maturityAmount = new BigNumber(web3.utils.fromWei(maturityAmount, 'ether')).toNumber()
            data.interestRate = interestRate
            initiationDate = initiationDate * 1000
            data.initiationDate = (new Date(initiationDate).getDate() + '/' + (new Date(initiationDate).getMonth() + 1) + '/' + new Date(initiationDate).getFullYear())
            maturityDate = maturityDate * 1000
            data.maturityDate = (new Date(maturityDate).getDate() + '/' + (new Date(maturityDate).getMonth() + 1) + '/' + new Date(maturityDate).getFullYear())
            data.loan = loans[key]
            var childPayment = []
            if(totalPayments > 0) {
              var totalPaidAmount=0, installmentsLeft
              for(var a=0;a<totalPayments;a++) {
                (async function(a){
                  await contract.methods.getPayment(a).call().then((payment)=>{
                    var payObj = {}
                    payObj.paidAmount = new BigNumber(payment.amount / (1 * (10**18))).toPrecision()
                    totalPaidAmount += Number(payment.amount)
                    payObj.paidAmountUSD =  new BigNumber((payObj.paidAmount * ETHRate).toPrecision()).toFixed(2)
                    var date = payment.timestamp * 1000
                    payObj.paidDate = (new Date(date).getDate() + '/' + (new Date(date).getMonth() + 1) + '/' + new Date(date).getFullYear())
                    payObj.flag  = 'Paid'
                    payObj.class  = 'text-green'
                    payObj.disClass  = totalPayments
                    childPayment.push(payObj)
                    setTimeout(function(){
                      if(a+1 == totalPayments){
                        installmentsLeft = term - totalPayments
                        var leftAmount = new BigNumber(maturityAmount).minus(new BigNumber(totalPaidAmount))
                        var installmentAmount = new BigNumber(leftAmount).div(installmentsLeft)
                        installmentAmount = installmentAmount.div(10**18)
                        var installmentAmountUSD = (new BigNumber(installmentAmount * ETHRate).toNumber()).toFixed(2)
                        var flag  = 'To pay'
                        for (var k = 0; k < installmentsLeft; k++) {
                          (async function(){
                            var payLeft = {}
                            var date = initiationDate
                            payLeft.paidDate = (new Date(date).getDate() + '/' + (new Date(date).getMonth() + (k + 2)) + '/' + new Date(date).getFullYear())
                            payLeft.paidAmount = installmentAmount.toPrecision(3)
                            payLeft.paidAmountUSD = installmentAmountUSD
                            payLeft.flag = flag
                            payLeft.class = 'text-warning'
                            payLeft.disClass  = installmentsLeft
                            childPayment.push(payLeft)
                            if(k+1 == installmentsLeft){
                              data.payment = childPayment
                              basicData.push(data)
                              store.dispatch('tab3TableDataAction',basicData)
                            }
                          }(k))
                        }
                      }
                    },200)
                  })
                }(a))
              }
            }
            else {
              installmentsLeft = term - totalPayments
              var leftAmount = new BigNumber(maturityAmount)
              var installmentAmount = new BigNumber(leftAmount).div(installmentsLeft)
              installmentAmount = new BigNumber(installmentAmount.div(10**18)).toNumber()
              var installmentAmountUSD = (new BigNumber(installmentAmount * ETHRate).toNumber()).toFixed(2)
              var flag  = 'To pay'
              for (var k = 0; k < installmentsLeft; k++) {
                (async function(){
                  var payLeft = {}
                  var date = initiationDate
                  payLeft.paidDate = (new Date(date).getDate() + '/' + (new Date(date).getMonth() + (k + 2)) + '/' + new Date(date).getFullYear())
                  payLeft.paidAmount = installmentAmount.toPrecision(3)
                  payLeft.paidAmountUSD = installmentAmountUSD
                  payLeft.flag = flag
                  payLeft.class = 'text-warning'
                  payLeft.disClass  = installmentsLeft
                  childPayment.push(payLeft)
                  if(k+1 == installmentsLeft){
                    data.payment = childPayment
                    basicData.push(data)
                  }
                }(k))
              }
            }
            if(count == contractInstance.length) {
              if(basicData.length == 0){
                store.dispatch('tab3TableDataAction',false)
              } else {
                store.dispatch('tab3TableDataAction',basicData)
              }
            }
        })
      })
      })
    }
    LoansInstance()
}
export default pollMyIssuances
