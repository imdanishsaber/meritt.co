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
	          <li role="presentation"  class="active"><a href="#/mywallet" class="text-warpper"><div class="tab-text">My Wallet</div></a></li>
	          <li role="presentation"><a href="#/myloan" class="text-warpper"><div class="tab-text">MY FA ISSUANCES</div></a></li>
	          <li role="presentation"><a href="#/mytoken" class="text-warpper"><div class="tab-text">MY FA TOKENS</div></a></li>
	        </ul>
				<!-- Tab panes -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="tab-groups">
						<table class="table info-table m-b-0">
							<tbody>
								<tr>
									<td class="text-left"><a href="#"><i class="material-icons">autorenew</i></a></td>
									<td class="text-center"><a href="#" class="light-gray-text"><i class="material-icons">keyboard_arrow_up</i></a></td>
									<td class="text-right"><a href="#"><i class="material-icons">reorder</i></a></td>
								</tr>

							</tbody>
						</table>
						<table class="table x-table b-b m-b-0">
							<tbody>
								<tr>
									<td><a href="#"><i class="material-icons">arrow_drop_down</i></a></td>
									<td><strong>{{merittSymbol}}</strong></td>
										<td><strong>{{merittBalance}}</strong></td>
									<td class="text-right">$35.23</td>
								</tr>
								<tr>
									<td colspan="3">
										<strong>Address</strong> <small>{{coinbase}}</small>
										<div  id="receiveDiv"  class="tabs blue-grey tabs-sm">
											<ul class="nav nav-tab">
												<li role="presentation" class="w-33 active"><a  @click="receiveDiv" class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
													<li role="presentation" class="w-33"><a @click="exchangeDiv" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
													<li role="presentation" class="w-33 "><a @click="sendDiv" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
												</ul>
											<div class="tab-content">
												<div role="tabpanel" class="tab-pane active" id="tab-receive">
													<form class="group-inputs-table">
														<div class="input-group">
															<span class="input-group-addon">MTT</span>
															<input type="text" v-model="receiveAmount" class="form-control" placeholder="Enter Amount">
															<span class="input-group-addon p-0"><a @click="openPopup" class="btn">Generate</a></span>
														</div>
													</form>
												</div>
												<div role="tabpanel" class="tab-pane " id="tab-exchange">
												</div>
												<div role="tabpanel" class="tab-pane" id="tab-send">
												</div>
											</div>
										</div>
										<div id="exchangeDiv" class="tabs blue-grey tabs-sm" style="display:none">
											<ul class="nav nav-tab">
												<li role="presentation" class="w-33 "><a  @click="receiveDiv" class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
													<li role="presentation" class="w-33 active"><a @click="exchangeDiv" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
													<li role="presentation" class="w-33 "><a @click="sendDiv" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
												</ul>
												<div class="tab-content">
													<div role="tabpanel" class="tab-pane " id="tab-receive">
													</div>
													<div role="tabpanel" class="tab-pane active" id="tab-exchange">
														<form class="group-inputs-table">
															<div class="input-group">
																<span class="input-group-addon">MTT</span>
																<input type="text" v-model="exchangeAmount" class="form-control" placeholder="Enter Amount">
																<span class="input-group-addon p-0"><button class="btn">Exchange</button></span>
															</div>
														</form>
													</div>
													<div role="tabpanel" class="tab-pane" id="tab-send">
													</div>
												</div>
											</div>
											<div id="sendDiv"  class="tabs blue-grey tabs-sm"  style="display:none">
												<ul class="nav nav-tab">
													<li role="presentation" class="w-33 "><a  @click="receiveDiv" class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
													<li role="presentation" class="w-33 "><a @click="exchangeDiv" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
													<li role="presentation" class="w-33 active"><a @click="sendDiv" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
												</ul>
												<div class="tab-content">
													<div role="tabpanel" class="tab-pane " id="tab-receive">
													</div>
													<div role="tabpanel" class="tab-pane " id="tab-exchange">
													</div>
													<div role="tabpanel" class="tab-pane active" id="tab-send">
														<form class="group-inputs-table">
															<div class="input-group m-b-5">
																<input  v-model= "resvAddress" type="text" class="form-control" placeholder="Enter Address" />
															</div>
															<div class="input-group">
																<span class="input-group-addon">MTT</span>
																<input type="text"  v-model= "sendAmout" class="form-control" placeholder="Enter Amount">
																<span class="input-group-addon p-0"><button @click.prevent="transferMeritt" class="btn">Send</button></span>
															</div>
														</form>
													</div>
												</div>
											</div>
										</td>

										<td valign="bottom" class="text-right">
											<qrcode-vue :value="address" :size="sizeSmall" level="H"></qrcode-vue>
											<!-- <img class="qr-code" alt="qr-code" height="90" src="../images/qr-code.png"> -->
										</td>
									</tr>
									<tr>
									<td><a href="#"><i class="material-icons rotate-minus-90">arrow_drop_down</i></a></td>
									<td><strong>BTC</strong></td>
									<td><strong>12.455</strong></td>
									<td class="text-right">$1235.23</td>
								</tr>
								<tr>
									<td><a href="#"><i class="material-icons rotate-minus-90">arrow_drop_down</i></a></td>
									<td><strong>ETH</strong></td>
									<td><strong>{{ethBalance}}</strong></td>
									<td class="text-right">${{ethBalanceUSD}}</td>
								</tr>
								<tr>
									<td><a href="#"><i class="material-icons rotate-minus-90">arrow_drop_down</i></a></td>
									<td><strong>NEO</strong></td>
									<td><strong>3.26</strong></td>
									<td class="text-right">$3335.45</td>
								</tr>
								<tr>
									<td><a href="#"><i class="material-icons rotate-minus-90">arrow_drop_down</i></a></td>
									<td><strong>XMR</strong></td>
									<td><strong>4.56</strong></td>
									<td class="text-right">$9538.23</td>
								</tr>
							</tbody>
						</table>

						<table class="table m-b-0 b-b x-table">
							<thead>
								<tr>
									<th></th>
									<th class="text-green">FA tokens</th>
									<th class="text-green">%</th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<template v-for="(item, index) in tableData">
									<tr>
										<td><a href="#"><i class="material-icons rotate-minus-90">arrow_drop_down</i></a></td>
										<td><strong>{{item[0]}}</strong></td>
										<td><small class="font-12">{{item[1]}}</small></td>
										<td><strong>{{item[2]}}</strong></td>
										<td class="text-right">{{item[3]}}</td>
									</tr>
								</template>
								<tr>
									<td><a href="#"><i class="material-icons rotate-minus-90">arrow_drop_down</i></a></td>
									<td><strong>FA-BTC#1</strong></td>
									<td><small class="font-12">10.5</small></td>
									<td><strong>8.364</strong></td>
									<td class="text-right">$8,364.00</td>
								</tr>
								<tr>
									<td><a href="#"><i class="material-icons rotate-minus-90">arrow_drop_down</i></a></td>
									<td><strong>FA-ETH#2</strong></td>
									<td><small class="font-12">2.6</small></td>
									<td><strong>6.759</strong></td>
									<td class="text-right">$4,692.09</td>
								</tr>
							</tbody>
						</table>
						<table class="table info-table m-b-0">
							<tbody>
								<tr>
									<td class="text-center"><a href="#" class="light-gray-text"><i class="material-icons">keyboard_arrow_down</i></a></td>
								</tr>

							</tbody>
						</table>
						<div class="fixed-bottom">
						<table class="table m-b-0 x-table">
							<tfoot>
								<tr>
									<th></th>
									<th>Total USD</th>
									<th></th>
									<th></th>
									<th class="text-right">$72,416.68</th>
								</tr>
							</tfoot>
						</table>

						</div>
					</div>
				</div>
							<div id="popupId" class="modal fade" tabindex="-1" role="dialog">
								<div class="modal-dialog sm-modal" role="document">
									<div class="modal-content">
										<div class="modal-header blue-grey">
											<button @click="closePopup" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<h4 class="modal-title text-white">Payment Request</h4>
										</div>
										<div class="modal-body p-0">
											<table class="table gr-table sm-table m-b-0">
												<tbody>
													<tr>
														<td class="text-center"><strong>Request {{receiveAmount}} MTT</strong></td>
													</tr>
													<tr>
														<td class="text-center"><small>{{coinbase}}</small></td>
													</tr>
													<tr>
														<td class="text-center" style="paddding:30px;">
															<qrcode-vue :value="address" :size="sizeLarge" level="H"></qrcode-vue>
															<!-- <img alt="qr-code" class="full-w-img" height="80" src="../images/qr-code.png"> -->
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
		</div>
	</div>
</template>

<script>
/* eslint-disable no-new */

import {mapState} from 'vuex'
import QrcodeVue from 'qrcode.vue'
import {BigNumber} from 'bignumber.js'

import {DebtTokenAddr, DebtTokenABI} from '../util/constants/DebtTokenABI'
import {MerittTokenAddr, MerittTokenABI} from '../util/constants/MerittTokenABI'


export default {
  name: 'tab_2',
  components: {
		QrcodeVue
  },
  data () {
    return {
			ETHRate: '',
			tableData: '',
			sizeSmall: 100,
			sizeLarge: 200,
      merittBalance: '',
			merittSymbol: '',
      ethBalanceUSD: '0',
			receiveAmount: '',
			exchangeAmount: '',
			sendAmout: '',
      resvAddress: '',
			address: ''
    }
  },
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
    this.$store.dispatch('getContractInstance')
  },
  computed: mapState({
    coinbase: state => state.web3.coinbase,
    ethBalance: state => state.web3.balance,
		web3: state => state.web3.web3Instance(),
		DebtTokenContract: state => state.DebtTokenContract(),
		ethBalance: state => {
      if (state.web3.balance != 0) {
				var ethBalance = state.web3.balance/(1*(10**18))
				ethBalance = Number(ethBalance).toFixed(2)
				return ethBalance
			}
    }
  }),
  methods: {
    merittDetails: function () {
			var State = this.$store
			this.address = this.coinbase
      var web3 = this.web3
			let MerittTokenContract = new web3.eth.Contract(MerittTokenABI, MerittTokenAddr)
      Promise.all([
        MerittTokenContract.methods.balanceOf(this.coinbase).call(),
        MerittTokenContract.methods.name().call()
        ]).then(([res1, res2]) => {
          this.merittBalance = res1 / (1 * (10**18))
          this.merittSymbol = res2
					var array = [this.merittBalance, this.merittSymbol]
					State.dispatch('tab2MerittAction',array)
					this.$http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(response => {
						var ETHRate = response.body[0].price_usd
						this.ethBalanceUSD = (ETHRate * this.ethBalance).toFixed(2)
					}, response => {
						console.log(response)
					})
      })
    },
		InitTable: function () {
			if (this.$store.state.tab2TableData) {
        this.tableData = this.$store.state.tab2TableData()
        return
      }
      setTimeout(this.TableData, 500)
    },
		TableData: function () {
			var ETHRate =  this.ETHRate
			var State = this.$store
			var x = this.$store.state
      var web3 = x.web3.web3Instance()
      var coinbase = x.web3.coinbase
      var MerittContract = x.MerittContract()
			var array = []
			this.tableData = array
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
                    var tokenBal = web3.utils.fromWei(tokenBalance, 'ether')
			              var tokenBalUSD = ('$' + ' ' + (tokenBal * ETHRate).toFixed(2))
                    var arr = [symbol, interestRate, tokenBal, tokenBalUSD]
                    array.push(arr)
										State.dispatch('tab2TableDataAction',array)
                })
              }
            })
          }
        })(i)
      })
    },
		transferMeritt: function () {
			var web3 = this.web3
      var DebtTokenContract = this.DebtTokenContract
      var resvAddress = this.resvAddress
      var Amount = this.sendAmout
      var data = DebtTokenContract.methods.transfer(resvAddress,Amount).encodeABI()
      web3.eth.sendTransaction({
        "from": this.coinbase,
        "to": DebtTokenAddr,
        "data": data
      }).then(console.log)
    },
		openPopup: function () {
			document.getElementById('popupId').classList.add('in')
		},
		closePopup: function () {
			document.getElementById('popupId').classList.remove('in')
		},
		receiveDiv: function () {
			document.getElementById('receiveDiv').style.display = 'block'
			document.getElementById('exchangeDiv').style.display = 'none'
			document.getElementById('sendDiv').style.display = 'none'
		},
		exchangeDiv: function () {
			document.getElementById('receiveDiv').style.display = 'none'
			document.getElementById('exchangeDiv').style.display = 'block'
			document.getElementById('sendDiv').style.display = 'none'
		},
		sendDiv: function () {
			document.getElementById('receiveDiv').style.display = 'none'
			document.getElementById('exchangeDiv').style.display = 'none'
			document.getElementById('sendDiv').style.display = 'block'
		},
		ETHRateFun: function functionName() {
			this.$http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(response => {
				this.ETHRate = response.body[0].price_usd
			}, response => {
				console.log(response)
			})
		}
  },
	beforeMount () {
		this.ETHRateFun()
    this.InitTable()
  },
  updated () {
		if (this.$store.state.tab2.merittBalance) {
			this.merittBalance = this.$store.state.tab2.merittBalance
			this.merittSymbol = this.$store.state.tab2.merittSymbol
			return
		}
		this.merittDetails()
  }
}
</script>

<style scoped>

</style>
