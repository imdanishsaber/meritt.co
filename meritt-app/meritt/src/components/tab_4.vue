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
          <li role="presentation"><a href="#/myloan" class="text-warpper"><div class="tab-text">MY FA ISSUANCES</div></a></li>
          <li role="presentation"  class="active"><a href="#/mytoken" class="text-warpper"><div class="tab-text">MY FA TOKENS</div></a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="tab-groups">
            <table class="table info-table b-b m-b-0">

              <tbody>
                <tr>
                  <th width="18%"><p><strong>MERITT ID:</strong></p></th>
                  <td><p>Satoshi Nakamoto</p><p><strong>Verification level: 76%</strong></p></td>
                  <td class="text-right"><a><i class="material-icons">reorder</i></a></td>
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
            <table class="table x-table md-table b-b m-b-0">

              <tbody>
                <tr>
                  <td><a href="#"><i class="material-icons">arrow_drop_down</i></a></td>
                  <td class="text-left" colspan="3"><strong>My Financial assets tokens: </strong></td>

                  <td></td>
                </tr>
                <template v-for="(item,index) in tableData">
                  <tr v-bind:data="item.loan" style="display:table-row">
                    <td><a href="#" ><i class="material-icons  rotate-minus-90">arrow_drop_down</i></a></td>
                    <td class="text-center"><strong>{{item.tokenBalance}} ETH</strong></td>
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
            <h4>Invest in trusted Financial asset</h4>
            <table class="table nb-table sm-table m-b-0">
              <tbody>
                <tr>
                  <td class="text-center"><a @click="OpenPopup" class="btn btn-primary">Trusted contact</a></td>
                  <td class="text-center"><a @click="OpenPopup" class="btn btn-primary">Trusted network</a></td>
                </tr>

              </tbody>
            </table>
            </div>
            <div class="well">
            <h4>Invest in Marketplace Financial asset</h4>
            <table class="table nb-table sm-table m-b-0">
              <tbody>

                <tr>
                  <td class="text-center">
                    <a @click="OpenPopup" class="btn btn-primary">Marketplace</a>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="popupId" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
      <button @click="ClosePopup" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Financial asset Marketplace</h4>
          </div>
          <div class="modal-body">
          <table class="table info-table m-b-0">
            <tbody>
              <tr>
                <td class="text-center"><a href="#" class="light-gray-text"><i class="material-icons">keyboard_arrow_up</i></a></td>
              </tr>
            </tbody>
          </table>
            <table class="table m-b-0 b-b x-table">
                <thead>
                  <tr>
                    <th class="text-center"></th>
                    <th class="text-center">FA name</th>
                    <th class="text-center">Ether amount</th>
                    <th class="text-center">% funded</th>
                    <th class="text-center">FA terms</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(item, index) in marketPlace">
                    <tr v-bind:id = "item[4]" @click="avlbTokenFun">
                      <td><a href="#"><i class="material-icons">keyboard_arrow_right</i></a></td>
                      <td class="text-center"><strong>{{item[0]}}</strong></td>
                      <td class="text-center"><strong>{{item[1]}}</strong></td>
                      <td class="text-center"><strong>{{item[2]}}</strong></td>
                      <td class="text-center">{{item[3]}}%</td>
                    </tr>
                  </template>
                  <template v-for="(item, index) in availableLoanDetail">
                    <tr>
                      <td colspan="5">
                        <table class="table stats-table sm-table m-b-0 table-bordered">
                          <tbody>
                            <tr>
                              <td>Description</td>
                              <td>Car loan </td>
                            </tr>
                            <tr>
                              <td>Amount</td>
                              <td>{{item[0]}}</td>
                            </tr>
                            <tr>
                              <td>%funded</td>
                              <td>{{item[1]}} %</td>
                            </tr>
                            <tr>
                              <td>% rate p.a.</td>
                              <td>{{item[2]}} %</td>
                            </tr>
                            <tr>
                              <td>Term</td>
                              <td>{{item[3]}}</td>
                            </tr>
                            <tr>
                              <td>Scoring</td>
                              <td>6,573</td>
                            </tr>
                            <tr>
                              <td>Collateral</td>
                              <td>No</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <strong>FA Address</strong> <small>{{item[4]}}</small>
                        <table class="table stats-table sm-table m-b-0 table-bordered">
                          <tbody>
                            <tr>
                              <td class="text-left">SEND <i class="material-icons">arrow_drop_up</i></td>
                            </tr>
                            <tr>
                              <td colspan="3"><form class="group-inputs-table">
                                <div class="input-group">
                                  <span class="input-group-addon">ETH</span>
                                  <input type="text" v-model="purchaseAmount" class="form-control" placeholder="Enter Amount">
                                  <span class="input-group-addon p-0"><a v-bind:data = "item[4]" @click="Purchase" class="btn">Send</a></span>

                                </div>
                              </form>

                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td class="text-right">
                      <qrcode-vue :value="item[4]" :size="sizeSmall" level="H"></qrcode-vue>
                      <!-- <img class="qr-code" alt="qr-code" height="80" src="../images/qr-code.png"> -->
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
          </div>

        </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import QrcodeVue from 'qrcode.vue'
import {DebtTokenAddr, DebtTokenABI} from '../util/constants/DebtTokenABI'
import {BigNumber} from 'bignumber.js'

export default {
  name: 'tab_4',
  components: {
		QrcodeVue
  },
  data () {
    return {
      childData:[],
      tableData: [],
      principalAmoun: '',
      sizeSmall: 100,
      tableData: [],
      marketPlace: [],
      availableLoanDetail: [],
      purchaseAmount: ''
    }
  },
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
    this.$store.dispatch('getContractInstance')
  },
  computed: mapState({
    coinbase: state => state.web3.coinbase,
    web3: state => state.web3.web3Instance(),
    MerittContract: state => state.MerittContract()
  }),
  methods: {
    InitTable: function () {
      if (this.$store.state.tab4TableData && this.$store.state.tab4MarketPlace) {
        this.tableData = this.$store.state.tab4TableData()
        this.marketPlace = this.$store.state.tab4MarketPlace()
        return
      }
      setTimeout(this.MarketPlace, 500)
      setTimeout(this.LoansInstance, 400)
    },
    LoansInstance: function (result) {
      var MerittContract = this.$store.state.MerittContract()
      var coinbase = this.$store.state.web3.coinbase
      var web3 = this.$store.state.web3.web3Instance()
      var myLoansContract = []
      MerittContract.methods.merittLoans().call({from: coinbase}).then(
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
        contract.methods.balanceOf(coinbase).call().then((tokenBalance)=>{
          if (tokenBalance != 0) {
            Promise.all([
              contract.methods.maturityAmount().call(),
              contract.methods.initiationDate().call(),
              contract.methods.interestRate().call(),
              contract.methods.maturityDate().call(),
              contract.methods.totalPayments().call(),
              contract.methods.term().call()
            ]).then(([maturityAmount, initiationDate, interestRate, maturityDate,totalPayments,term]) => {
                var data = {}
                data.tokenBalance = web3.utils.fromWei(tokenBalance, 'ether')
                data.maturityAmount = web3.utils.fromWei(maturityAmount, 'ether')
                data.interestRate = interestRate
                initiationDate = initiationDate * 1000
                data.initiationDate = (new Date(initiationDate).getDate() + '/' + new Date(initiationDate).getMonth() + '/' + new Date(initiationDate).getFullYear())
                maturityDate = maturityDate * 1000
                data.maturityDate = (new Date(maturityDate).getDate() + '/' + new Date(maturityDate).getMonth() + '/' + new Date(maturityDate).getFullYear())
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
                        payObj.paidDate = (new Date(date).getDate() + '/' + new Date(date).getMonth() + '/' + new Date(date).getFullYear())
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
                                payLeft.paidDate = (new Date(date).getDate() + '/' + (new Date(date).getMonth() + (k + 1)) + '/' + new Date(date).getFullYear())
                                payLeft.paidAmount = installmentAmount.toPrecision(3)
                                payLeft.paidAmountUSD = installmentAmountUSD
                                payLeft.flag = flag
                                payLeft.class = 'text-warning'
                                payLeft.disClass  = installmentsLeft
                                childPayment.push(payLeft)
                                if(k+1 == installmentsLeft){
                                  data.payment = childPayment
                                  basicData.push(data)
                                  State.dispatch('tab4TableDataAction',basicData)
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
                      payLeft.paidDate = (new Date(date).getDate() + '/' + (new Date(date).getMonth() + (k + 1)) + '/' + new Date(date).getFullYear())
                      payLeft.paidAmount = installmentAmount.toPrecision(3)
                      payLeft.paidAmountUSD = installmentAmountUSD
                      payLeft.flag = flag
                      payLeft.class = 'text-warning'
                      payLeft.disClass  = installmentsLeft
                      childPayment.push(payLeft)
                      if(k+1 == installmentsLeft){
                        data.payment = childPayment
                        basicData.push(data)
                        State.dispatch('tab4TableDataAction',basicData)
                      }
                    }(k))
                  }
                }
            })
          }
        })
      });
    },
    dropDown: function (event) {
      console.log(event)
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
    MarketPlace: function () {
      var array = []
      this.marketPlace = array
      var State = this.$store
      var storeState = this.$store.state
      var web3 = storeState.web3.web3Instance()
      var coinbase = storeState.web3.coinbase
      var MerittContract = storeState.MerittContract()
      MerittContract.methods.merittLoans().call().then((res) => {
        var merittLoansContract = []
        for (var i = 0; i < res.length; i++) {
          let merittLoanInstance = new web3.eth.Contract(DebtTokenABI, res[i])
          merittLoansContract.push(merittLoanInstance)
        }
        (async function(){
          var tableData = []
          var count = 0
          for (var i = 0; i < merittLoansContract.length; i++) {
            await merittLoansContract[i].methods.balanceOf(coinbase).call().then((tokenBalance)=>{
                Promise.all([
                  merittLoansContract[i].methods.symbol().call(),
                  merittLoansContract[i].methods.principal().call(),
                  merittLoansContract[i].methods.funded().call(),
                  merittLoansContract[i].methods.interestRate().call()
                ]).then(([symbol, principal, funded, interestRate]) => {
                  funded =((funded / principal) * 100).toPrecision(3)
                  principal = web3.utils.fromWei(principal, 'ether')
                    var arr = [symbol, principal, funded, interestRate, res[count++]]
                    array.push(arr)
                    State.dispatch('tab4MarketPlaceAction',array)
                })
            })
          }
        })(i)
      })
    },
    avlbTokenFun: function () {
      var array = []
      this.availableLoanDetail = array
      var storeState = this.$store.state
      var web3 = storeState.web3.web3Instance()
      var coinbase = storeState.web3.coinbase
      const contAddr = event.path[3].id
      var avlbLoanInstance = new web3.eth.Contract(DebtTokenABI, contAddr)
        var count = 0
        Promise.all([
          avlbLoanInstance.methods.principal().call(),
          avlbLoanInstance.methods.funded().call(),
          avlbLoanInstance.methods.interestRate().call(),
          avlbLoanInstance.methods.term().call()
        ]).then(([principal, funded, interestRate, term]) => {
          funded =((funded / principal) * 100).toPrecision(3)
          principal = web3.utils.fromWei(principal, 'ether')
          var arr = [principal, funded, interestRate, term, contAddr]
          array.push(arr)
        })
    },
    Purchase: function (event) {
      var storeState = this.$store.state
      var web3 = storeState.web3.web3Instance()
      var coinbase = storeState.web3.coinbase
      var toAddress = event.path[0].attributes.data.value
      var Amount = this.purchaseAmount
      var DebtTokenContract = storeState.DebtTokenContract()
      var data = DebtTokenContract.methods.purchase().encodeABI()
      web3.eth.sendTransaction({
        "from": this.coinbase,
        "to": toAddress,
        "value": Amount,
        "data": data
      }).then(console.log)
    },
    ETHRateFun: function () {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(response => {
        this.ETHRate = response.body[0].price_usd
      }, response => {
        console.log(response)
      })
    },
    OpenPopup:function () {
      document.getElementById('popupId').classList.add('in')
    },
    ClosePopup:function () {
      document.getElementById('popupId').classList.remove('in')
    }
  },
  beforeMount () {
    this.InitTable()
    this.ETHRateFun()
  },
  updated () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
