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
          <li role="presentation"><a href="#/myloan" class="text-warpper"><div class="tab-text">MY FA ISSUANCES</div></a></li>
          <li role="presentation"  class="active"><a href="#/mytoken" class="text-warpper"><div class="tab-text">MY FA TOKENS</div></a></li>
        </ul>


        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="tab-groups">

            <table id="ele" class="table info-table b-b m-b-0">
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
                  <td class="text-center" @click.prevent= "ScrollUp"><a href="#" class="light-gray-text block"><i class="material-icons">keyboard_arrow_up</i></a></td>
                </tr>
              </tbody>
            </table>

            <div style=" max-height:300px; overflow:auto;">
            <table class="table x-table md-table b-b m-b-0 scroll">
              <tbody>
                <tr>
                  <td><a href="#"><i class="material-icons">arrow_drop_down</i></a></td>
                  <td class="text-left" colspan="3"><strong>My Financial assets tokens: </strong></td>
                  <td></td>
                </tr>
                <tr v-show="loading" style="display:table-row; cursor:pointer">
                  <td  colspan="5" class="text-center"><img alt="qr-code" height="50" src="../images/loading.gif"></td>
                </tr>
                <template v-for="(item,index) in tableData">
                  <tr  v-show="completed" v-bind:data="item.loan" style="display:table-row; cursor:pointer;">
                    <td class="text-center" @click.prevent="TabelDetails($event)" ><i class="material-icons  rotate-minus-90">arrow_drop_down</i></td>
                    <td class="text-center" @click.prevent="TabelDetails($event)" ><strong>{{item.tokenBalance}} {{item.symbol}}</strong></td>
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
                              <!-- <td class="text-center"><i class="material-icons  rotate-minus-90" style="visibility:hidden" >arrow_drop_down</i></td> -->
                              <td class="text-center" v-bind:class="itemInner.class"><strong> {{itemInner.availableFunds}}</strong></td>
                              <td class="text-center" v-bind:class="itemInner.class" @click.prevent="OpenWithdrawConfirmation" v-bind:amount="itemInner.availableFunds" v-bind:data="item.loan" style="cursor:pointer;" > {{itemInner.flag}} </td>
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
                <td class="text-center" @click.prevent= "ScrollDown"><a href="#" class="light-gray-text block"><i class="material-icons">keyboard_arrow_down</i></a></td>
              </tr>
            </tbody>
          </table>
            <div class="well">
            <h4>Invest in trusted Financial asset</h4>
            <table class="table nb-table sm-table m-b-0">
              <tbody>
                <tr>
                  <td class="text-center"><a @click.prevent="OpenPopup" class="btn btn-primary">Trusted contact</a></td>
                  <td class="text-center"><a @click.prevent="OpenPopup" class="btn btn-primary">Trusted network</a></td>
                </tr>

              </tbody>
            </table>
            </div>
            <div id="element" class="well">
            <h4>Invest in Marketplace Financial asset</h4>
            <table class="table nb-table sm-table m-b-0">
              <tbody>

                <tr>
                  <td class="text-center">
                    <a @click.prevent="OpenPopup" class="btn btn-primary">Marketplace</a>
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
      <button @click.prevent="ClosePopup" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Financial asset Marketplace</h4>
          </div>
          <div class="modal-body">
          <table class="table info-table m-b-0">
            <tbody>
              <tr>
                <td class="text-center" @click.prevent="ScrollUpPopup"><a href="#" class="light-gray-text"><i class="material-icons">keyboard_arrow_up</i></a></td>
              </tr>
            </tbody>
          </table>
          <div style=" max-height:300px; overflow:auto;">
              <table class="table m-b-0 b-b x-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>FA name</th>
                      <th>Ether amount</th>
                      <th>% funded</th>
                      <th>FA terms</th>
                    </tr>
                  </thead>

                  <tbody>
                    <template v-for="(item, index) in availableLoanDetail">
                      <tr  v-bind:id="item.loan" style="display:table-row; cursor:pointer;">
                        <td class="text-center" @click.prevent="MarketPlaceDetails($event)" style="cursor:pointer;" ><i class="material-icons rotate-minus-90">keyboard_arrow_down</i></td>
                        <td class="text-center" @click.prevent="MarketPlaceDetails($event)" >{{item.symbol}}</td>
                        <td class="text-center" @click.prevent="MarketPlaceDetails($event)" >{{item.principal}}</td>
                        <td class="text-center" @click.prevent="MarketPlaceDetails($event)" >{{item.funded}}</td>
                        <td class="text-center" @click.prevent="MarketPlaceDetails($event)" >{{item.term}}</td>
                      </tr>
                        <tr  v-bind:id="item.loan + 'a'" style="display:none">
                          <td colspan="5">
                            <table class="table stats-table sm-table m-b-0 table-bordered">
                              <tbody>
                                <tr>
                                  <td>Description</td>
                                  <td>{{item.symbol}}</td>
                                </tr>
                                <tr>
                                  <td>Amount</td>
                                  <td>{{item.principal}}</td>
                                </tr>
                                <tr>
                                  <td>%funded</td>
                                  <td>{{item.funded}}%</td>
                                </tr>
                                <tr>
                                  <td>% rate p.a.</td>
                                  <td>{{item.interestRate}}%</td>
                                </tr>
                                <tr>
                                  <td>Term</td>
                                  <td>{{item.term}}</td>
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
                        <tr v-bind:id="item.loan + 'aa'" style="display:none">
                          <td colspan="4">
                            <strong>FA Address</strong> <small>{{item.loan}}</small>
                            <table class="table stats-table sm-table m-b-0 table-bordered">
                              <tbody>
                                <tr>
                                  <td class="text-left">SEND <i class="material-icons">arrow_drop_up</i></td>
                                </tr>
                                <tr>
                                  <td colspan="3"><form class="group-inputs-table">
                                    <div class="input-group">
                                      <span class="input-group-addon">ETH</span>
                                      <input id="purchaseAmount" type="number"class="form-control" placeholder="Enter Amount">
                                      <span class="input-group-addon p-0"><a id="purchaseButton" v-bind:data = "item.loan" @click.prevent="OpenConfirmation" class="btn">Send</a></span>
                                    </div>
                                  </form>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td class="text-bottom">
                          <qrcode-vue :value="item.loan" :size="sizeSmall" level="H" style="padding-top:20px;"></qrcode-vue>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
            </div>

              <table class="table info-table m-b-0">
                <tbody>
                  <tr>
                    <td class="text-center" @click.prevent="ScrollDownPopup"><a href="#" class="light-gray-text"><i class="material-icons">keyboard_arrow_down</i></a></td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
      <div id="confirmation" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog sm-modal" role="document">
          <div class="modal-content">
            <div class="modal-header blue-grey">
              <button @click.prevent="CloseConfirmation" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-white">Payment Confirmation</h4>
            </div>
            <div class="modal-body p-0">
              <table class="table gr-table sm-table m-b-0">
                <tbody  v-show="confirmation" style="padding:30px;">
                  <tr>
                    <td class="text-center"><strong>Transfer {{purchaseAmnt}} ETH</strong></td>
                  </tr>
                  <tr>
                    <td class="text-center"><strong>Receiver Address</strong></td>
                  </tr>
                  <tr>
                    <td class="text-center"><small>{{purchaseAddr}}</small></td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <qrcode-vue :value="purchaseAddr" :size="sizeLarge" level="H"></qrcode-vue>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td>
                      <button class="btn btn-primary btn-block" @click.prevent="Purchase">Confirm
                      </button>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td>
                      <button class="btn btn btn-block" @click.prevent="CloseConfirmation">Cancel
                      </button>
                    </td>
                  </tr>
                  <tr class="text-center" style="visibility:hidden">
                    <td>
                      <button>Cancel
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody  v-show="metaMask" style="padding:30px;">
                  <tr>
                    <td class="text-center"><strong>Transfer {{purchaseAmnt}} ETH</strong></td>
                  </tr>
                  <tr>
                    <td class="text-center"><strong>Receiver Address</strong></td>
                  </tr>
                  <tr>
                    <td class="text-center"><small>{{purchaseAddr}}</small></td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <qrcode-vue :value="purchaseAddr" :size="sizeLarge" level="H"></qrcode-vue>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center"><strong><a class="btn btn-lg btn-block btn-primary">Check your Metamask</a></strong></td>
                  </tr>
                  <tr class="text-center" style="visibility:hidden">
                    <td>
                      <button>Cancel
                      </button>
                    </td>
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
import pollMyTokens from '../util/pollMyTokens'

export default {
  name: 'tab_4',
  components: {
		QrcodeVue
  },
  data () {
    return {
      loading: false,
			completed: true,
      childData:[],
      sizeLarge: 200,
      principalAmoun: '',
      sizeSmall: 80,
      marketPlace: [],
      purchaseAddr: '',
      purchaseAmnt: '',
      flag: '',
      confirmation: true,
      metaMask: false
    }
  },
  computed: mapState({
    coinbase: state => state.web3.coinbase,
    tableData(state) {
      this.loading = true
      if (state.tab4TableData) {
        this.loading = false
        return state.tab4TableData()
      }else if (state.tab4TableData == false) {
        this.loading = false
      }
    },
    availableLoanDetail: state => {
      if (state.tab4MarketPlace) {
        return state.tab4MarketPlace()
      }
    },
    web3: state => state.web3.web3Instance(),
    MerittContract: state => state.MerittContract()
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
    MarketPlaceDetails: function (event) {
      var id
      var id2
      var arrow
      if (event.composedPath()[1].attributes[1].value == 'text-center') {
        id = (event.composedPath()[2].attributes[1].value + 'a')
        id2 = (event.composedPath()[2].attributes[1].value + 'aa')
        arrow =  event.composedPath()[0]
      } else {
        id = (event.composedPath()[1].attributes[1].value + 'a')
        id2 = (event.composedPath()[1].attributes[1].value + 'aa')
        arrow =  event.composedPath()[1].firstChild.firstChild
      }
      var display = document.getElementById(id).style.display
      var display2 = document.getElementById(id2).style.display
      if (display == 'table-row') {
        document.getElementById(id).style.display = 'none'
        document.getElementById(id2).style.display = 'none'
        arrow.classList.remove("rotate-minus-180")
        arrow.classList.add("rotate-minus-90")
      } else if (display == 'none') {
        document.getElementById(id).style.display = 'table-row'
        document.getElementById(id2).style.display = 'table-row'
        arrow.classList.remove("rotate-minus-90")
        arrow.classList.add("rotate-minus-180")
      }
    },
    WithDraw: function () {
      var storeState = this.$store.state
      var web3 = storeState.web3.web3Instance()
      var DebtTokenContract = storeState.DebtTokenContract()
      var toAddress = event.composedPath()[0].attributes.data.value
      var data = DebtTokenContract.methods.withdraw().encodeABI()
      web3.eth.sendTransaction({
        'from': this.coinbase,
        'to': toAddress,
        'value': '0x0',
        'data': data
      }).then((res) => {
        setTimeout(function () {
          pollMyTokens()
        }, 2000)
      }).catch((res) => {
        console.log(res);
      })
    },
    OpenConfirmation: function (event) {
      if (event.composedPath()[3][0].value == '') {
        event.composedPath()[3][0].className += " formInvalid"; //add the class .formInvalid to your element
        return
      } else if (event.composedPath()[3][0].value == 0) {
				event.composedPath()[3][0].value = ""
				event.composedPath()[3][0].placeholder = "Invalid Amount"
				event.composedPath()[3][0].className += " formInvalid"
				return
			}
      this.confirmation = true
      this.metaMask = false
      this.purchaseAddr = event.composedPath()[0].attributes.data.value
      this.flag = 'Purchase'
      this.purchaseAmnt = (event.composedPath()[3][0].value)
      document.getElementById('confirmation').classList.add('in')
    },
    OpenWithdrawConfirmation: function (event) {
      this.confirmation = true
      this.metaMask = false
      this.purchaseAddr = this.coinbase
      this.tempAddress = event.composedPath()[0].attributes.data.value
      this.purchaseAmnt = event.composedPath()[0].attributes.amount.value
      this.flag = 'Withdraw'
      document.getElementById('confirmation').classList.add('in')
    },
    CloseConfirmation: function () {
      this.confirmation = true
      this.metaMask = false
      this.purchaseAddr = ''
      this.purchaseAmnt = ''
      document.getElementById('confirmation').classList.remove('in')
    },
    Purchase: function (event) {
      if (this.flag == "Withdraw") {
        var storeState = this.$store.state
        var web3 = storeState.web3.web3Instance()
        var DebtTokenContract = storeState.DebtTokenContract()
        var toAddress = this.tempAddress
        var data = DebtTokenContract.methods.withdraw().encodeABI()
        web3.eth.sendTransaction({
          'from': this.coinbase,
          'to': toAddress,
          'value': '0x0',
          'data': data
        }).then((res) => {
          setTimeout(function () {
            pollMyTokens()
          }, 2000)
        }).catch((res) => {
          console.log(res);
        })
      } else if (this.flag == "Purchase") {
        var storeState = this.$store.state
        var web3 = storeState.web3.web3Instance()
        var toAddress = this.purchaseAddr
        var Amount = new BigNumber(this.purchaseAmnt * (1* (10**18)))
        var DebtTokenContract = storeState.DebtTokenContract()
        var data = DebtTokenContract.methods.purchase().encodeABI()
        web3.eth.sendTransaction({
          'from': this.coinbase,
          'to': toAddress,
          'value': Amount,
          'data': data
        }).then ((res) => {
          setTimeout(function () {
            pollMyTokens()
          }, 2000)
        }).catch((res) => {
          console.log(res);
        })
      }
      this.confirmation = false
      this.metaMask = true
      setTimeout( function () {
        this.confirmation = true
        this.metaMask = false
        this.purchaseAddr = ''
        this.purchaseAmnt = ''
        document.getElementById('confirmation').classList.remove('in')
      },5000)
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
    OpenPopup: function () {
      document.getElementById('popupId').classList.add('in')
    },
    ClosePopup: function () {
      document.getElementById('popupId').classList.remove('in')
    },
    ScrollDownPopup: function (event) {
      if ((event.composedPath()).length == 17) {
        event.composedPath()[6].children[1].scrollBy(0, 90);
      } else {
        event.composedPath()[4].children[1].scrollBy(0, 90);
      }
    },
    ScrollUpPopup: function (event) {
      if ((event.composedPath()).length == 17) {
        event.composedPath()[6].children[1].scrollBy(0, -90);
      } else {
        event.composedPath()[4].children[1].scrollBy(0, -90);
      }
    },
    ETHRateFun: function () {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(response => {
        this.ETHRate = response.body[0].price_usd
      }, response => {
        console.log(response)
      })
    }
  },
  beforeMount () {
    this.ETHRateFun()
  }
}
</script>

<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }
  ::-moz-scrollbar {
    display: none;
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
