<template>
  <div class="wrapper">
    <div class="header header-light">
      <div class="row p-0">
        <div class="col p-0">
          <a class="left-navbar-brand" href="#">
            <img alt="Brand" src="../images/meritt.png">
          </a>
        </div>
        <div class="col p-0">
          <a class="navbar-brand" href="#">
            <img alt="Brand" src="../images/meritt-icon.png">
          </a>
        </div>
        <div class="col p-0 text-right">
          <a class="icon" href="#">
          <span class="bedge">3</span>
            <i class="material-icons">textsms</i>
          </a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="tabs">
        <ul class="nav nav-tab">
          <li role="presentation"><a href="#/home" class="text-warpper"><div class="tab-text">Trusted Contacts &amp; Groups</div></a></li>
          <li role="presentation"><a href="#/mywallet" class="text-warpper"><div class="tab-text">My Wallet</div></a></li>
          <li role="presentation" class="active"><a href="#/myloan" class="text-warpper"><div class="tab-text">MY FA ISSUANCES</div></a></li>
          <li role="presentation"><a href="#/mytoken" class="text-warpper"><div class="tab-text">MY FA TOKENS</div></a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="tab-groups">
            <table class="table info-table b-b m-b-0">
              <tbody>
                <tr>
                  <th width="18%"><p><strong>MERITT ID:</strong></p></th>
                  <td><p>Satoshi Nakamoto</p><p><strong>Verification level: 76%</strong></p></td>
                  <td class="text-right"><a href="#"><i class="material-icons">reorder</i></a></td>
                </tr>
                <tr>
                  <th><p><strong>MERITT Score:</strong></p></th>
                  <td colspan="2"><p>2,635</p></td>
                </tr>
              </tbody>
            </table>
            <table class="table info-table m-b-0">
              <tbody>
                <tr>
                  <td class="text-center"><a href="#" class="light-gray-text block"><i class="material-icons">keyboard_arrow_up</i></a></td>
                </tr>
              </tbody>
            </table>
            <table  class="table x-table md-table m-b-0">
              <tbody id="table">
                <tr>
                  <td><a href="#"><i class="material-icons">arrow_drop_down</i></a></td>
                  <td class="text-left" colspan="5"><strong>My issued financial assets:</strong></td>
                </tr>
                <template v-for="(item,index) in tableData">
                  <tr v-bind:data="item.loan" style="display:table-row">
                    <td><a href="#" @click="dropDown($event)" ><i class="material-icons  rotate-minus-90">arrow_drop_down</i></a></td>
                    <td class="text-center"><strong>{{item.maturityAmount}} ETH</strong></td>
                    <td class="text-center"><strong>{{item.initiationDate}}</strong></td>
                    <td class="text-center">{{item.interestRate}}%</td>
                    <td class="text-center"><strong>{{item.maturityDate}}</strong></td>
                  </tr>
                  <tr v-bind:id="item.loan" style="display:none">
                    <td colspan="5" style="padding: 0px;">
                      <table class="table x-table md-table m-b-0 b-0">
                        <tbody>
                          <template v-for="(itemInner,indexInner) in item.payment">
                            <tr>
                              <td><a class="text-center" style="visibility:hidden" href="#">20.01</a></td>
                              <td class="text-center" v-bind:class="itemInner.class"><strong> {{itemInner.paidAmount}} ETH </strong></td>
                              <td class="text-center" v-bind:class="itemInner.class"><strong> {{itemInner.paidDate}} </strong></td>
                              <td class="text-center" v-bind:class="itemInner.class"> {{itemInner.flag}} </td>
                              <td class="text-center" v-bind:class="itemInner.class"><strong> ${{itemInner.paidAmountUSD}} </strong></td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <table class="table info-table m-b-0">
              <tbody>
                <tr>
                  <td class="text-center"><a href="#" class="light-gray-text"><i class="material-icons">keyboard_arrow_down</i></a></td>
                </tr>

              </tbody>
            </table>
            <div class="well">
              <h4>Issue FA tokens &amp; raise funds</h4>
              <table class="table nb-table sm-table m-b-0">
                <tbody>
                  <tr style="display:table-row">
                    <td class="text-center"><a @click="OpenPopup" class="btn btn-primary">Trusted contact</a></td>
                    <td class="text-center"><a  @click="OpenPopup" class="btn btn-primary">Trusted network</a></td>
                  </tr>
                  <tr>
                    <td class="text-center" colspan="2">
                      <a  @click="OpenPopup" class="btn btn-primary">Marketplace</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="popupId" class="modal fade " tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
        <button @click="ClosePopup" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">FA issuance &amp; fund request</h4>
        </div>
        <div class="modal-body">
        <form>
          <table class="table form-table m-b-0">
            <tbody>
              <tr>
                <td class="text-left"><label for="ether_amount" class="control-label">Ether Amount</label></td>
                <td class="text-center" colspan="2"><input type="text" v-model="principalAmoun"  class="form-control" id="ether_amount" placeholder="Enter Loan amount" /></td>
              </tr>
              <tr>
                <td class="text-left"><label for="fund_name" class="control-label">Name</label></td>
                <td class="text-center" colspan="2"><input type="text" v-model="symbol" class="form-control" id="fund_name" placeholder="Enter name" /></td>
              </tr>
              <tr>
                <td class="text-left"><label for="fund_descriptione" class="control-label">FA Description</label></td>
                <td class="text-center" colspan="2"><input type="text" v-model="description" class="form-control" id="fund_descriptione" placeholder="Write down Description" /></td>
              </tr>
              <tr>
                <td class="text-left"><label for="fa_type" class="control-label">FA Type</label></td>
                <td class="text-center"><button type="button" class="btn btn-block btn-default">Loan</button></td>
                <td class="text-center"><button type="button" class="btn btn-block btn-default">Utility token</button></td>
              </tr>
              <tr>
                <td class="text-left"><label for="fa_1_type_loan" class="control-label">Terms 1-FA</label></td>
                <td class="text-center"><input type="text" v-model="interestRate" class="form-control" id="fa_1_type_loan" placeholder="Loan - % rate" /></td>
                <td class="text-center"><input type="text" class="form-control" id="fa_1_type_eth" placeholder="# number FAT per ETH" /></td>
              </tr>
            <tr>
              <td class="text-left"><label for="fa_2_type_loan" class="control-label">Terms 2-FA</label></td>
              <td class="text-center"><input type="text" v-model="term" class="form-control" id="fa_2_type_months" placeholder="# months" /></td>
              <td class="text-center"><input type="text" class="form-control" id="fa_2_type_attached" placeholder="Rights attached" /></td>
            </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-center" colspan="3"><button @click.prevent="CreateLoan" type="button" class="btn btn-xlg btn-block btn-primary">Issue FA tokens &amp; raise funds</button></td>
              </tr>
            </tfoot>
          </table>
        </form>
        </div>
        <div class="modal-footer">
        <table class="table  sm-table m-b-0 table-bordered">
          <tbody v-show="display">
            <tr >
              <td class="text-left"><strong>Generated address for lenders to invest in the FA and buy tokens</strong></td>
              <td class="text-right">
                <qrcode-vue :value="newLoanAddr" :size="sizeSmall" level="H"></qrcode-vue>
                <!-- <img alt="qr-code" height="80" src="../images/qr-code.png"> -->
              </td>
            </tr>
            <tr>
              <td class="text-left" colspan="2"><small>{{newLoanAddr}}</small></td>
            </tr>
          </tbody>
          <tbody v-show="waiting">
            <tr>
              <td class="text-center"><img alt="qr-code" height="80" src="../images/loading.gif"></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {MerittLedgerAddr} from '../util/constants/MerittLedgerABI'
import {DebtTokenABI} from '../util/constants/DebtTokenABI'
import {BigNumber} from 'bignumber.js'
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'tab_3',
  components: {
    QrcodeVue
  },
  data () {
    return {
      childData:[],
      tableData: [],
      principalAmoun: '',
      name: 'Dept Token',
      symbol: '',
      description: '',
      type: 'loan',
      interestRate: '',
      term: '',
      ETHRate: '',
      display: false,
      waiting: false,
      newLoanAddr: '',
      sizeSmall: 70
    }
  },
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
    this.$store.dispatch('getContractInstance')
  },
  computed: mapState({
    coinbase: state => state.web3.coinbase
  }),
  methods: {
    InitTable: function () {
      if (this.$store.state.tab3TableData) {
        this.tableData = this.$store.state.tab3TableData()
        return
      }
      setTimeout(this.LoansInstance, 400)
    },
    LoansInstance: function (result) {
      var MerittContract = this.$store.state.MerittContract()
      var coinbase = this.$store.state.web3.coinbase
      var web3 = this.$store.state.web3.web3Instance()
      var myLoansContract = []
      MerittContract.methods.myLoans().call({from: coinbase}).then(
        (res) =>
        {
          for (var j = 0; j < res.length; j++)
          {
            let myLoanInstance = new web3.eth.Contract(DebtTokenABI, res[j])
            myLoansContract.push(myLoanInstance)
            if(j+1 == res.length) {
              return this.TableData(myLoansContract,res)
            }
          }
        }
      )
    },
    TableData: function (contractInstance,loans) {
      var ETHRate = this.ETHRate
      var State = this.$store
      var storeState = this.$store.state
      var web3 = storeState.web3.web3Instance()
      var coinbase = storeState.web3.coinbase
      var data = []
      var basicData = []
      var paymentDetails = []
      this.tableData = basicData
      contractInstance.forEach(function (contract, key) {
        Promise.all([
          contract.methods.maturityAmount().call(),
          contract.methods.initiationDate().call(),
          contract.methods.interestRate().call(),
          contract.methods.maturityDate().call(),
          contract.methods.totalPayments().call(),
          contract.methods.term().call()
        ]).then(([maturityAmount, initiationDate, interestRate, maturityDate,totalPayments,term]) => {
            var data = {}
            data.maturityAmount = web3.utils.fromWei(maturityAmount, 'ether')
            data.interestRate = interestRate
            initiationDate = initiationDate * 1000
            data.initiationDate = (new Date(initiationDate).getDate() + '/' + (new Date(initiationDate).getMonth() + 1) + '/' + new Date(initiationDate).getFullYear())
            maturityDate = maturityDate * 1000
            data.maturityDate = (new Date(maturityDate).getDate() + '/' + (new Date(maturityDate).getMonth() + 1) + '/' + new Date(maturityDate).getFullYear())
            data.loan = loans[key]
            var childPayment = []
            if(totalPayments > 0){
              var totalPaidAmount=0, installmentsLeft
              for(var a=0;a<totalPayments;a++) {
                (async function(a){
                  await contract.methods.getPayment(a).call().then((payment)=>{
                    var payObj = {}
                    payObj.paidAmount = (payment.amount / (1 * (10**18)));
                    totalPaidAmount += Number(payment.amount)
                    payObj.paidAmountUSD =  (payObj.paidAmount * ETHRate).toFixed(2)
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
                        var installmentAmountUSD = (installmentAmount * ETHRate).toFixed(2)
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
                              State.dispatch('tab3TableDataAction',basicData)
                            }
                          }(k))
                        }
                      }
                    },200)
                  })
                }(a))
              }
            }else{
              installmentsLeft = term - totalPayments
              var leftAmount = new BigNumber(maturityAmount)
              var installmentAmount = new BigNumber(leftAmount).div(installmentsLeft)
              installmentAmount = installmentAmount.div(10**18)
              var installmentAmountUSD = (installmentAmount * ETHRate).toFixed(2)
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
                    State.dispatch('tab3TableDataAction',basicData)
                  }
                }(k))
              }
            }
        })
      });
    },
    dropDown: function (event) {
      var arrow =  event.path[0]
      var id = event.path[3].attributes[1].value
      var display = document.getElementById(id).style.display
      if (display == 'table-row') {
        document.getElementById(id).style.display = 'none'
        arrow.classList.remove("rotate-minus-180")
        arrow.classList.add("rotate-minus-90")
      } else if (display == 'none') {
        document.getElementById(id).style.display = 'table-row'
        arrow.classList.remove("rotate-minus-90")
        arrow.classList.add("rotate-minus-180")
      }
    },
    CreateLoan: function () {
      this.waiting = true
      var web3 = this.$store.state.web3.web3Instance()
      var MerittContract = this.$store.state.MerittContract()
      console.log(MerittContract)
      var data = MerittContract.methods.createLoan(this.name, this.symbol, this.type, this.principalAmoun, this.interestRate, this.term).encodeABI()
      web3.eth.sendTransaction({
        'from': this.coinbase,
        'to': MerittLedgerAddr,
        'data': data
      }).then((res) => {
        this.waiting = false
        this.display = true
        this.newLoanAddr = res.logs[0].address
      }).catch((res) => {
        this.waiting = false
        this.display = false
        console.log(res)
      })
    },
    ETHRateFun: function () {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(response => {
        this.ETHRate = response.body[0].price_usd
      }, response => {
        console.log(response)
      })
    },
    OpenPopup: function () {
      document.getElementById('popupId').classList.add('in')
    },
    ClosePopup: function () {
      this.waiting = false
      this.display = false
      document.getElementById('popupId').classList.remove('in')
    }
  },
  mounted () {
    this.ETHRateFun()
    this.InitTable()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
