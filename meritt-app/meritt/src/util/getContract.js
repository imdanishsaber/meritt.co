import Web3 from 'web3'
import {MerittLedgerAddr, MerittLedgerABI} from './constants/MerittLedgerABI'
import {DebtTokenAddr, DebtTokenABI} from './constants/DebtTokenABI'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let MerittContract = new web3.eth.Contract(MerittLedgerABI, MerittLedgerAddr)
  let DebtTokenContract = new web3.eth.Contract(DebtTokenABI, DebtTokenAddr)
  let array = []
  array.push(MerittContract)
  array.push(DebtTokenContract)
  resolve(array)
})

export default getContract
