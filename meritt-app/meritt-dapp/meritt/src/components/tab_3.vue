<template>
  <div class="wrapper">
    <div class="header header-light">
      <div class="row p-0">
        <div class="col p-0">
          <a class="left-navbar-brand" href="#">
            <!-- <img alt="Brand" src="../images/meritt.png"> -->
            <p class="dubai">MERITT<span style="color:#3f3f3f;">ALPHA</span></p>
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
                  <td class="text-center" @click.prevent="ScrollUp"><a href="#" class="light-gray-text block"><i class="material-icons">keyboard_arrow_up</i></a></td>
                </tr>
              </tbody>
            </table>
           <div style=" max-height:300px; overflow:auto;">
            <table  class="table x-table md-table m-b-0 scroll">
              <tbody id="table">
                <tr>
                  <td><a href="#"><i class="material-icons">arrow_drop_down</i></a></td>
                  <td class="text-left" colspan="5"><strong>My issued financial assets:</strong></td>
                </tr>
                <tr v-show="loading" style="display:table-row; cursor:pointer">
                  <td  colspan="5" class="text-center"><img alt="qr-code" height="50" src="../images/loading.gif"></td>
                </tr>
                <template v-for="(item,index) in tableData">
                  <tr v-show="completed" v-bind:data="item.loan" style="display:table-row; cursor:pointer">
                    <td class="text-center" @click.prevent="TabelDetails($event)" ><i class="material-icons  rotate-minus-90">arrow_drop_down</i></td>
                    <td class="text-center" @click.prevent="TabelDetails($event)" ><strong>{{item.maturityAmount}} ETH</strong></td>
                    <td class="text-center" @click.prevent="TabelDetails($event)" ><strong>{{item.initiationDate}}</strong></td>
                    <td class="text-center" @click.prevent="TabelDetails($event)" >{{item.interestRate}}%</td>
                    <td class="text-center" @click.prevent="TabelDetails($event)" ><strong>{{item.maturityDate}}</strong></td>
                  </tr>
                  <tr v-bind:id="item.loan" style="display:none">
                    <td colspan="5" style="padding: 0px;">
                      <table class="table x-table md-table m-b-0 b-0">
                        <tbody>
                          <template v-for="(itemInner,indexInner) in item.payment">
                            <tr>
                              <td class="text-center"><i class="material-icons  rotate-minus-90" style="visibility:hidden" >arrow_drop_down</i></td>
                              <td class="text-center" v-bind:class="itemInner.class"><strong> {{itemInner.paidAmount}} ETH </strong></td>
                              <td class="text-center" v-bind:class="itemInner.class"><strong> {{itemInner.paidDate}} </strong></td>
                              <td class="text-center" v-bind:class="itemInner.class" @click.prevent="OpenPopup2" v-bind:data="item.loan" v-bind:amount="itemInner.paidAmount" style="cursor:pointer"> {{itemInner.flag}} </td>
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
          </div>
          <table class="table info-table m-b-0">
            <tbody>
              <tr>
                <td class="text-center" @click.prevent="ScrollDown"><a href="#" class="light-gray-text block"><i class="material-icons">keyboard_arrow_down</i></a></td>
              </tr>
            </tbody>
          </table>
            <div class="well">
              <h4>Issue FA tokens &amp; raise funds</h4>
            <table class="table nb-table sm-table m-b-0">
              <tbody>
                <tr>
                  <td class="text-center"><a  @click.prevent="OpenPopup" class="btn btn-primary">Trusted contact</a>
                     <a  @click.prevent="OpenPopup" class="btn btn-primary">Trusted network</a>
                     <a  @click.prevent="OpenPopup" class="btn btn-primary">Marketplace</a></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="popupId2" class="modal fade " tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
        <button @click.prevent="ClosePopup2" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Loan pay</h4>
        </div>
        <div class="modal-body">
        <form>
          <table class="table form-table m-b-0">
            <tbody>
              <tr>
                <td class="text-left"><label for="ether_amount" class="control-label">Loan address</label></td>
                <td class="text-center" colspan="2"><input type="text" v-model="loanAddress"  class="form-control" placeholder="Enter loan address" disabled /></td>
              </tr>
              <tr>
                <td class="text-left"><label for="ether_amount" class="control-label">Ether Amount</label></td>
                <td class="text-center" colspan="2"><input id="payAmount" type="number" v-model="payAmount"  class="form-control" placeholder="Enter amount" /></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-center" colspan="3"><button id="payLoanButton" @click.prevent="PayLoan" type="button" class="btn btn-xlg btn-block btn-primary">Pay</button></td>
              </tr>
            </tfoot>
          </table>
        </form>
        </div>
        <div class="modal-footer">
        <table class="table  sm-table m-b-0 table-bordered">
          <tbody v-show="payLoanError">
            <tr>
              <td colspan="5"><strong id="payLoanError" style="font-size:15px;">Error: Transaction was not mined within 50 blocks, please make sure your transaction was properly send. Be aware that it might still be mined!</strong></td>
            </tr>
          </tbody>
          <tbody v-show="payLoanConfirmation">
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
          <tbody v-show="payLoanWaiting">
            <tr>
              <td class="text-center"><img alt="qr-code" height="80" src="../images/loading.gif"></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <div id="popupId" class="modal fade " tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
        <button @click.prevent="ClosePopup" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">FA issuance &amp; fund request</h4>
        </div>
        <div class="modal-body">
        <form>
          <table class="table form-table m-b-0">
            <tbody>
              <tr>
                <td class="text-left"><label for="ether_amount" class="control-label">Ether Amount</label></td>
                <td class="text-center" colspan="2"><input id="principalAmount"  maxlength="5" onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" v-model="principalAmount"  class="form-control" placeholder="Enter Loan amount" /></td>
              </tr>
              <tr>
                <td class="text-left"><label for="fund_name" class="control-label">Name</label></td>
                <td class="text-center" colspan="2"><input id="symbol" type="text" v-model="symbol" maxlength="16" class="form-control" placeholder="Enter name" /></td>
              </tr>
              <tr>
                <td class="text-left"><label for="fund_descriptione" class="control-label">FA Description</label></td>
                <td class="text-center" colspan="2"><input id="description" type="text" maxlength="32" v-model="description" class="form-control" placeholder="Write down Description" /></td>
              </tr>
              <tr>
                <td class="text-left"><label for="fa_type" class="control-label">FA Type</label></td>
                <td class="text-center"><button type="button" @click.prevent = "DisableUtility" class="btn btn-block btn-default">Loan</button></td>
                <td class="text-center"><button type="button"  @click.prevent = "DisableLoan" class="btn btn-block btn-default">Utility token</button></td>
              </tr>
              <tr>
                <td class="text-left"><label for="fa_1_type_loan" class="control-label">Terms 1-FA</label></td>
                <td class="text-center"><input id="interestRate" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" v-model="interestRate" class="form-control"  placeholder="Loan - % rate" /></td>
                <td class="text-center"><input id="utilityOne" type="number" class="form-control"  placeholder="# number FAT per ETH" disabled /></td>
              </tr>
            <tr>
              <td class="text-left"><label for="fa_2_type_loan" class="control-label">Terms 2-FA</label></td>
              <td class="text-center"><input id="term"  maxlength="3"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" v-model="term" class="form-control"  placeholder="# months" /></td>
              <td class="text-center"><input id="utilityTwo" type="number" class="form-control"  placeholder="Rights attached" disabled /></td>
            </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-center" colspan="3"><button id="createLoanButton" @click.prevent="CreateLoan" type="button" class="btn btn-xlg btn-block btn-primary">Issue FA tokens &amp; raise funds</button></td>
              </tr>
            </tfoot>
          </table>
        </form>
        </div>
        <div class="modal-footer">
        <table class="table sm-table m-b-0 table-bordered">
          <tbody v-show="error">
            <tr>
              <td colspan="5"><strong id="error" style="font-size:15px;">Error: Transaction was not mined within 50 blocks, please make sure your transaction was properly send. Be aware that it might still be mined!</strong></td>
            </tr>
          </tbody>
          <tbody v-show="display">
            <tr >
              <td class="text-left"><strong>Generated address for lenders to invest in the FA and buy tokens</strong></td>
              <td class="text-right">
                <qrcode-vue :value="newLoanAddr" :size="sizeSmall" level="H"></qrcode-vue>
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
            <tr style="border:none;">
              <td class="text-center">Transaction in process</td>
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
import pollMyIssuances from '../util/pollMyIssuances'


export default {
  name: 'tab_3',
  components: {
    QrcodeVue
  },
  data () {
    return {
      childData:[],
      // tableData: [],
      loading: false,
      sizeLarge: 200,
			completed: true,
      principalAmount: '',
      name: 'Dept Token',
      symbol: '',
      description: '',
      type: 0,
      interestRate: '',
      term: '',
      tokenPrice: 0.1,
      ETHRate: '',
      newLoanAddr: '',
      sizeSmall: 70,
      payAmount: '',
      loanAddress: '',
      display: false,
      waiting: false,
      error: false,
      payLoanConfirmation: false,
      payLoanWaiting: false,
      payLoanError: false
    }
  },
  computed: mapState({
    coinbase: state => state.web3.coinbase,
    tableData(state) {
      this.loading = true
      if (state.tab3TableData) {
        this.loading = false
        return state.tab3TableData()
      }else if (state.tab3TableData == false) {
        this.loading = false
      }
    }
  }),
  methods: {
    TabelDetails: function (event) {
      var id
      var arrow
      if (event.composedPath()[1].attributes[1].value == 'text-center') {
        id = event.composedPath()[2].attributes[1].value
        if (event.composedPath()[0].localName == 'strong') {
          arrow =  event.composedPath()[2].firstChild.firstChild
        } else {
          arrow =  event.composedPath()[0]
        }
      } else {
          id = event.composedPath()[1].attributes[1].value
          arrow =  event.composedPath()[1].firstChild.firstChild
      }
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
    OpenPopup: function () {
      document.getElementById('popupId').classList.add('in')
      document.getElementById('createLoanButton').disabled = false
    },
    ClosePopup: function () {
      this.principalAmount = ''
      this.symbol = ''
      this.description = ''
      this.interestRate = ''
      this.term = ''
      var principalAmount = document.getElementById('principalAmount')
      var symbol = document.getElementById('symbol')
      var description = document.getElementById('description')
      var interestRate = document.getElementById('interestRate')
      var term = document.getElementById('term')
      principalAmount.classList.remove('formInvalid')
      symbol.classList.remove('formInvalid')
      description.classList.remove('formInvalid')
      interestRate.classList.remove('formInvalid')
      term.classList.remove('formInvalid')
      this.waiting = false
      this.display = false
      this.error = false
      document.getElementById('popupId').classList.remove('in')
    },
    DisableLoan: function () {
      document.getElementById('interestRate').disabled = true
      document.getElementById('term').disabled = true
      document.getElementById('utilityOne').disabled = false
      document.getElementById('utilityTwo').disabled = false
    },
    DisableUtility: function () {
      document.getElementById('interestRate').disabled = false
      document.getElementById('term').disabled = false
      document.getElementById('utilityOne').disabled = true
      document.getElementById('utilityTwo').disabled = true
    },
    CreateLoan: function () {
      var principalAmount = document.getElementById('principalAmount')
      var symbol = document.getElementById('symbol')
      var description = document.getElementById('description')
      var interestRate = document.getElementById('interestRate')
      var term = document.getElementById('term')
      if (this.principalAmount == '' || this.symbol == '' || this.description == '' || this.interestRate == '' || this.term == '') {
        if (this.principalAmount == '') {
          principalAmount.className += " formInvalid"
        }
        if (this.symbol == '') {
          symbol.className += " formInvalid"
        }
        if (this.description == '') {
          description.className += " formInvalid"
        }
        if (this.interestRate == '') {
          interestRate.className += " formInvalid"
        }
        if (this.term == '') {
          term.className += " formInvalid"
        }
        return
      }
      if (this.term == 0 || this.term == '0') {
        this.term = ''
        term.className += " formInvalid"
        return
      }
      document.getElementById('createLoanButton').disabled = true
      this.waiting = true
      this.display = false
      this.error = false
      var web3 = this.$store.state.web3.web3Instance()
      var MerittContract = this.$store.state.MerittContract()
      var principalAmount = new BigNumber(this.principalAmount * (1* (10**18)))
      var tokenPrice = new BigNumber(1/this.tokenPrice)
      var data = MerittContract.methods.createLoan(this.name, this.symbol, this.description, this.type, principalAmount, this.interestRate, this.term, tokenPrice).encodeABI()
      web3.eth.sendTransaction({
        'from': this.coinbase,
        'to': MerittLedgerAddr,
        'data': data
      }).then((res) => {
        document.getElementById('createLoanButton').disabled = false
        this.display = true
        this.waiting = false
        this.newLoanAddr = res.logs[0].address
        // this.LoansInstance()
        setTimeout(function () {
          console.log('chal oye');
          pollMyIssuances()
        }, 2000)
      }).catch((res) => {
        document.getElementById('createLoanButton').disabled = false
        this.waiting = false
        res = res.toString()
        var match1 = res.indexOf("Transaction was not mined within 50 blocks")
        var match2 = res.indexOf("Returned error: Error: MetaMask Tx Signature: User denied transaction signature.")
        if (match1 >= 0) {
          document.getElementById('error').innerHTML = "Error: Transaction was not mined within 50 blocks, please make sure your transaction was properly send. Be aware that it might still be mined!"
          this.error = true
        } else if (match2 >= 0) {
          document.getElementById('error').innerHTML = "Transaction Rejected from Metamask"
          this.error = true
        } else {
          document.getElementById('error').innerHTML = "Check your Metamask"
          this.error = true
        }

      })
    },
    OpenPopup2: function (event) {
      document.getElementById('popupId2').classList.add('in')
      this.loanAddress = event.composedPath()[0].attributes.data.value
      this.payAmount = event.composedPath()[0].attributes.amount.value
      document.getElementById('payLoanButton').disabled = false
    },
    ClosePopup2: function () {
      this.payAmount = ''
      document.getElementById("payAmount").classList.remove('formInvalid')
      this.payLoanWaiting = false
      this.payLoanConfirmation = false
      this.payLoanError = false
      this.waiting = false
      this.display = false
      document.getElementById('popupId2').classList.remove('in')
    },
    PayLoan: function () {
      if (this.payAmount == '') {
        document.getElementById("payAmount").className += " formInvalid"; //add the class .formInvalid to your element
        return
      }
      document.getElementById('payLoanButton').disabled = true
      this.payLoanWaiting = true
      this.payLoanConfirmation = false
      this.payLoanError = false
      var storeState = this.$store.state
      var web3 = storeState.web3.web3Instance()
      var toAddress = this.loanAddress
      var Amount = new BigNumber(this.payAmount * (1 * (10**18)))
      web3.eth.sendTransaction({
        'from': this.coinbase,
        'to': toAddress,
        'value': Amount,
        'data': ''
      }).then((res) => {
        document.getElementById('payLoanButton').disabled = false
        this.payLoanWaiting = false
        this.payLoanConfirmation = true
        this.newLoanAddr = res.logs[0].address
        // this.LoansInstance()
        setTimeout(function () {
          pollMyIssuances()
        }, 2000)
      }).catch((res) => {
        document.getElementById('payLoanButton').disabled = false
        this.payLoanWaiting = false
        res = res.toString()
        console.log(res)
        if (true) {

        }
        var match1 = res.indexOf("Transaction was not mined within 50 blocks")
        var match2 = res.indexOf("Returned error: Error: MetaMask Tx Signature: User denied transaction signature.")
        if (match1 >= 0) {
          document.getElementById('payLoanError').innerHTML = "Error: Transaction was not mined within 50 blocks, please make sure your transaction was properly send. Be aware that it might still be mined!"
          this.payLoanError = true
        } else if (match2 >= 0) {
          document.getElementById('payLoanError').innerHTML = "Transaction Rejected from Metamask"
          this.payLoanError = true
        } else {
          document.getElementById('payLoanError').innerHTML = "Check your Metamask"
          this.payLoanError = true
        }

      })
    },
    ScrollDown: function (event) {
      if ((event.composedPath()).length == 17) {
        event.composedPath()[6].children[2].scrollBy(0, 90);
      } else {
        event.composedPath()[5].children[2].scrollBy(0, 90);
      }
    },
    ScrollUp: function (event) {
      if ((event.composedPath()).length == 17) {
        event.composedPath()[6].children[2].scrollBy(0, -90);
      } else {
        event.composedPath()[5].children[2].scrollBy(0, -90);
      }
    },
    ETHRateFun: function () {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(response => {
        this.ETHRate = response.body[0].price_usd
      }, response => {
        console.log(response)
      })
    },
  },
  mounted () {
    this.ETHRateFun()
  }
}
</script>

<style scoped>

::-webkit-scrollbar {
  display: none;
}
input[type="number"]:disabled {
    background: #E8E8E8;
}
input.formInvalid::-webkit-input-placeholder {
   color: red;
   font-weight: bolder;
}
input.formInvalid::-moz-placeholder {
  color: red;
  font-weight: bolder;
}
</style>
