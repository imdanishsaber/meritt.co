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
          <li role="presentation"><a href="#/home" class="dubia text-warpper"><div class="tab-text">Trusted Contacts &amp; Groups</div></a></li>
          <li role="presentation"  class="active"><a href="#/mywallet" class="text-warpper"><div class="tab-text">My Wallet</div></a></li>
          <li role="presentation"><a href="#/myloan" class="text-warpper"><div class="tab-text">MY FA ISSUANCES</div></a></li>
          <li role="presentation"><a href="#/mytoken" class="text-warpper"><div class="tab-text">MY FA TOKENS</div></a></li>
        </ul>
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="tab-groups">
						<table class="table info-table m-b-0">
							<tbody>
								<tr>
									<td class="text-left"><a href="#"><i class="material-icons">autorenew</i></a></td>
									<td class="text-center" style="width: 100%;" @click.prevent="ScrollUp"><a href="#" class="light-gray-text block"><i class="material-icons">keyboard_arrow_up</i></a></td>
									<td class="text-right"><a href="#"><i class="material-icons">reorder</i></a></td>
								</tr>
							</tbody>
						</table>
						<div style=" max-height:550px; overflow:auto;">
							<table class="table info-table m-b-0 scroll">
								<tbody>
									<table class="table x-table b-b m-b-0">
										<tbody>

											<tr v-show="loading" style="display:table-row; cursor:pointer">
												<td  colspan="4" class="text-center"><img alt="qr-code" height="50" src="../images/loading.gif"></td>
											</tr>
											<tr v-show="completed" style="display:table-row; cursor:pointer">
												<td @click="MerittExchange" ><i class="material-icons">arrow_drop_down</i></td>
												<td @click="MerittExchange" ><strong>{{merittSymbol}}</strong></td>
												<td @click="MerittExchange" ><strong>{{merittBalance}}</strong></td>
												<td @click="MerittExchange"  class="text-right"><div>$0</div></td>
											</tr>

											<tr v-show="sendReceive">
												<td colspan="3">
													<strong>Address</strong> <small>{{coinbase}}</small>
													<div  id="merittReceiveDiv"  class="tabs blue-grey tabs-sm">
														<ul class="nav nav-tab">
															<li @click.prevent="receiveDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																<li @click.prevent="exchangeDiv" role="presentation" class="w-33 "><a href="#" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																<li @click.prevent="sendDiv" role="presentation" class="w-33"><a href="#" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
															</ul>
														<div class="tab-content">
															<div role="tabpanel" class="tab-pane active" id="tab-receive">
																<form class="group-inputs-table">
																	<div class="input-group">
																		<span class="input-group-addon">MTT</span>
																		<input maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" class="form-control" placeholder="Enter Amount">
																			<span class="input-group-addon p-0"   data ="MTT" ><a @click.prevent="OpenPopup" class="btn" v-bind:address="coinbase"  v-bind:symbol="MTTsymbol" >Generate</a></span>
																	</div>
																</form>
															</div>
														</div>
													</div>
													<div id="merittExchangeDiv" class="tabs blue-grey tabs-sm" style="display:none">
														<ul class="nav nav-tab">
															<li @click.prevent="receiveDiv"  role="presentation" class="w-33 "><a href="#"  class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																<li @click.prevent="exchangeDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																<li @click.prevent="sendDiv" role="presentation" class="w-33 "><a href="#" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
															</ul>
															<div class="tab-content">
																<div role="tabpanel" class="tab-pane active" id="tab-exchange">
																	<form class="group-inputs-table">
																		<div class="input-group">
																			<span class="input-group-addon">MTT</span>
																			<input maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" class="form-control" placeholder="Enter Amount">
																			<span class="input-group-addon p-0"   data ="MTT" ><a  class="btn">Exchange</a></span>
																		</div>
																	</form>
																</div>
															</div>
														</div>
														<div id="merittSendDiv"  class="tabs blue-grey tabs-sm"  style="display:none">
															<ul class="nav nav-tab">
																<li @click.prevent="receiveDiv" role="presentation" class="w-33 "><a href="#"  class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																<li @click.prevent="exchangeDiv" role="presentation" class="w-33 "><a href="#" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																<li @click.prevent="sendDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
															</ul>
															<div class="tab-content">
																<div role="tabpanel" class="tab-pane active" id="tab-send">
																	<form class="group-inputs-table">
																		<div class="input-group m-b-5">
																			<input id="merittResvAddr" type="text" class="form-control" placeholder="Enter Address" />
																		</div>
																		<div class="input-group">
																			<span class="input-group-addon">MTT</span>
																			<input id="sendMeritt" maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" class="form-control" placeholder="Enter Amount">
																			<span class="input-group-addon p-0"><a class="btn" v-bind:address="coinbase" v-bind:symbol="merittSymbol" @click.prevent="OpenConfirmation">Send</a></span>
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</td>
												<td valign="bottom" class="text-right">
													<qrcode-vue :value="address" :size="sizeSmall" level="H"  style="padding-top:40px"></qrcode-vue>
												</td>
											</tr>

											<tr style="display:table-row; cursor:pointer">
												<td @click.prevent="EtherExchange" ><i class="material-icons rotate-minus-90">arrow_drop_down</i></td>
												<td @click.prevent="EtherExchange" ><strong>ETH</strong></td>
												<td @click.prevent="EtherExchange" ><strong>{{ethBalance}}</strong></td>
												<td @click.prevent="EtherExchange"  class="text-right"><div>${{ethBalanceUSD}}</div></td>
											</tr>

											<tr v-show="sendReceiveEther">
												<td colspan="3">
													<strong>Address</strong> <small>{{coinbase}}</small>
													<div  id="receiveEtherDiv"  class="tabs blue-grey tabs-sm">
														<ul class="nav nav-tab">
															<li @click.prevent="receiveDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																<li @click.prevent="exchangeDiv" role="presentation" class="w-33"><a href="#" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																<li @click.prevent="sendDiv" role="presentation" class="w-33 "><a href="#" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
															</ul>
														<div class="tab-content">
															<div role="tabpanel" class="tab-pane active" id="tab-receive">
																<form class="group-inputs-table">
																	<div class="input-group">
																		<span class="input-group-addon">Ether</span>
																		<input maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" class="form-control" placeholder="Enter Amount">
																		<span class="input-group-addon p-0" data ="ETH" ><a @click.prevent="OpenPopup" class="btn" v-bind:address="coinbase"  v-bind:symbol="Ethersymbol" >Generate</a></span>
																	</div>
																</form>
															</div>
														</div>
													</div>
													<div id="exchangeEtherDiv" class="tabs blue-grey tabs-sm" style="display:none">
														<ul class="nav nav-tab">
															<li @click.prevent="receiveDiv"  role="presentation" class="w-33 "><a href="#"  class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																<li @click.prevent="exchangeDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																<li @click.prevent="sendDiv" role="presentation" class="w-33 "><a href="#" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
															</ul>
															<div class="tab-content">
																<div role="tabpanel" class="tab-pane " id="tab-receive">
																</div>
																<div role="tabpanel" class="tab-pane active" id="tab-exchange">
																	<form class="group-inputs-table">
																		<div class="input-group">
																			<span class="input-group-addon">Ether</span>
																			<input maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" v-model="exchangeAmount" class="form-control" placeholder="Enter Amount">
																			<span class="input-group-addon p-0"><a class="btn">Exchange</a></span>
																		</div>
																	</form>
																</div>
																<div role="tabpanel" class="tab-pane" id="tab-send">
																</div>
															</div>
														</div>
														<div id="sendEtherDiv"  class="tabs blue-grey tabs-sm"  style="display:none">
															<ul class="nav nav-tab">
																<li @click.prevent="receiveDiv" role="presentation" class="w-33 "><a href="#"  class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																<li @click.prevent="exchangeDiv" role="presentation" class="w-33 "><a href="#" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																<li @click.prevent="sendDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
															</ul>
															<div class="tab-content">
																<div role="tabpanel" class="tab-pane " id="tab-receive">
																</div>
																<div role="tabpanel" class="tab-pane " id="tab-exchange">
																</div>
																<div role="tabpanel" class="tab-pane active" id="tab-send">
																	<form class="group-inputs-table">
																		<div class="input-group m-b-5">
																			<input id="etherResvAddr" type="text" class="form-control" placeholder="Enter Address" />
																		</div>
																		<div class="input-group">
																			<span class="input-group-addon">Ether</span>
																			<input id="sendEther" maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" class="form-control" placeholder="Enter Amount">
																			<span class="input-group-addon p-0"><a @click.prevent="OpenConfirmation" v-bind:symbol="Ethersymbol" v-bind:Address="coinbase" class="btn">Send</a></span>
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</td>
												<td valign="bottom" class="text-right">
													<qrcode-vue :value="address" :size="sizeSmall" level="H" style="padding-top:40px"></qrcode-vue>
												</td>
											</tr>

											<tr>
												<td><a href="#"><i class="material-icons rotate-minus-90">arrow_drop_down</i></a></td>
												<td><strong>BTC</strong></td>
												<td><strong>223.46</strong></td>
												<td class="text-right">$18000.45</td>
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
												<td><strong>114.56</strong></td>
												<td class="text-right">$953836.23</td>
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
												<tr v-bind:data="item[4]" style="display:table-row; cursor:pointer">
													<td @click.prevent="TokenExchange($event)"><i class="material-icons rotate-minus-90">arrow_drop_down</i></td>
													<td @click.prevent="TokenExchange($event)" ><strong>{{item[0]}}</strong></td>
													<td @click.prevent="TokenExchange($event)" ><small class="font-12">{{item[1]}}</small></td>
													<td @click.prevent="TokenExchange($event)" ><strong>{{item[2]}}</strong></td>
													<td @click.prevent="TokenExchange($event)" class="text-right"><div>${{item[3]}}</div></td>
												</tr>
												<tr v-bind:id="item[4]"  style="display:none">
													<td colspan="4">
														<strong>Address</strong> <small>{{item[4]}}</small>
														<div v-bind:id="item[4] + 'receiveDiv'" class="tabs blue-grey tabs-sm" style="table-row">
															<ul class="nav nav-tab">
																<li @click.prevent="receiveDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																	<li @click.prevent="exchangeDiv" role="presentation" class="w-33"><a href="#"  class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																	<li @click.prevent="sendDiv" role="presentation" class="w-33 "><a href="#"  class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
																</ul>
															<div class="tab-content">
																<div role="tabpanel" class="tab-pane active" id="tab-receive">
																	<form class="group-inputs-table">
																		<div class="input-group">
																			<span class="input-group-addon">{{item[0]}}</span>
																			<input maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" class="form-control" placeholder="Enter Amount">
																			<span class="input-group-addon p-0"><a @click.prevent="OpenPopup" class="btn" v-bind:address="item[4]"  v-bind:symbol="item[0]" >Generate</a></span>
																		</div>
																	</form>
																</div>
																<div role="tabpanel" class="tab-pane " id="tab-exchange">
																</div>
																<div role="tabpanel" class="tab-pane" id="tab-send">
																</div>
															</div>
														</div>
														<div v-bind:id="item[4] + 'exchanDiv'" class="tabs blue-grey tabs-sm" style="display:none">
															<ul class="nav nav-tab">
																<li @click.prevent="receiveDiv"  role="presentation" class="w-33 "><a href="#"  class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																	<li @click.prevent="exchangeDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																	<li @click.prevent="sendDiv" role="presentation" class="w-33 "><a href="#" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
																</ul>
																<div class="tab-content">
																	<div role="tabpanel" class="tab-pane " id="tab-receive">
																	</div>
																	<div role="tabpanel" class="tab-pane active" id="tab-exchange">
																		<form class="group-inputs-table">
																			<div class="input-group">
																				<span class="input-group-addon">{{item[0]}}</span>
																				<input maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" v-model="exchangeAmount" class="form-control" placeholder="Enter Amount">
																				<span class="input-group-addon p-0"><a class="btn">Exchange</a></span>
																			</div>
																		</form>
																	</div>
																	<div role="tabpanel" class="tab-pane" id="tab-send">
																	</div>
																</div>
															</div>
															<div v-bind:id="item[4] + 'sendDiv'"  class="tabs blue-grey tabs-sm"  style="display:none">
																<ul class="nav nav-tab">
																	<li @click.prevent="receiveDiv" role="presentation" class="w-33 "><a href="#"  class="text-warpper"><div class="tab-text">RECEIVE <i class="material-icons">arrow_drop_down</i></div></a></li>
																	<li @click.prevent="exchangeDiv" role="presentation" class="w-33 "><a href="#" class="text-warpper"><div class="tab-text">EXCHANGE <i class="material-icons">compare_arrows</i></div></a></li>
																	<li @click.prevent="sendDiv" role="presentation" class="w-33 active"><a href="#" class="text-warpper"><div class="tab-text">SEND <i class="material-icons">arrow_drop_up</i></div></a></li>
																</ul>
																<div class="tab-content">
																	<div role="tabpanel" class="tab-pane " id="tab-receive">
																	</div>
																	<div role="tabpanel" class="tab-pane " id="tab-exchange">
																	</div>
																	<div role="tabpanel" class="tab-pane active" id="tab-send">
																		<form class="group-inputs-table">
																			<div class="input-group m-b-5">
																				<input type="text" class="form-control" placeholder="Enter Address" />
																			</div>
																			<div class="input-group">
																				<span class="input-group-addon">{{item[0]}}</span>
																				<input maxlength="10"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' type="text" class="form-control" placeholder="Enter Amount">
																				<span class="input-group-addon p-0"  v-bind:address="item[4]"><a @click.prevent="OpenConfirmation" v-bind:symbol="item[0]" v-bind:address="item[4]" class="btn">Send</a></span>
																			</div>
																		</form>
																	</div>
																</div>
															</div>
														</td>
													<td valign="bottom" class="text-right">
														<qrcode-vue :value="item[4]" :size="sizeSmall" level="H" style="padding-top:40px"></qrcode-vue>
													</td>
												</tr>
											</template>


										</tbody>
									</table>
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
				<div id="tokenPopupId" class="modal fade" tabindex="-1" role="dialog">
					<div class="modal-dialog sm-modal" role="document">
						<div class="modal-content">
							<div class="modal-header blue-grey">
								<button @click.prevent="ClosePopup" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h4 class="modal-title text-white">Payment Request</h4>
							</div>
							<div class="modal-body p-0">
								<table class="table gr-table sm-table m-b-0">
									<tbody>
										<tr>
											<td class="text-center"><strong>Request {{receiveAmount}} {{receiveSymbol}}</strong></td>
										</tr>
										<tr>
											<td class="text-center"><small>{{receiveAddress}}</small></td>
										</tr>
										<tr>
											<td class="text-center" style="paddding:30px;">
												<qrcode-vue :value="receiveAddress" :size="sizeLarge" level="H"></qrcode-vue>
											</td>
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
									<tbody  v-show="confirmation">
										<tr>
											<td class="text-center"><strong>Transfer {{paymentAmount}} {{paymentSymbol}}</strong></td>
										</tr>
										<tr>
											<td class="text-center"><strong>Receiver Address</strong></td>
										</tr>
										<tr>
											<td class="text-center"><small>{{paymentAddress}}</small></td>
										</tr>
										<tr>
											<td class="text-center">
												<qrcode-vue :value="tempAddress" :size="sizeLarge" level="H"></qrcode-vue>
											</td>
										</tr>
										<tr class="text-center">
											<td>
												<button class="btn btn-lg btn-block btn-primary" v-bind:tempAddress="tempAddress" @click.prevent="Transfer">Confirm
												</button>
											</td>
										</tr>
										<tr class="text-center">
											<td>
												<button class="btn btn-lg btn-block" @click.prevent="CloseConfirmation" style="margin-right:20px;">Cancel
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
											<td class="text-center"><strong>Transfer {{paymentAmount}} {{paymentSymbol}}</strong></td>
										</tr>
										<tr>
											<td class="text-center"><strong>Receiver Address</strong></td>
										</tr>
										<tr>
											<td class="text-center"><small>{{paymentAddress}}</small></td>
										</tr>
										<tr>
											<td class="text-center">
												<qrcode-vue :value="tempAddress" :size="sizeLarge" level="H"></qrcode-vue>
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
			MTTsymbol: 'MTT',
			Ethersymbol: 'ETH',
			loading: false,
			completed: true,
			sendReceive: true,
			sendReceiveEther: false,
			ETHRate: '',
			sizeSmall: 85,
			sizeLarge: 200,
			receiveMeritt: '',
			exchangeAmount: '',
			sendMeritt: '',
      merittResvAddr: '',
			sendEther: '',
      etherResvAddr: '',
			address: '0x0086dEBC66b284BB4Ef1C06bE095bcae8f16e4D6',
			receiveAmount: '',
			receiveSymbol: '',
			receiveAddress: '',
			paymentAmount: '',
			paymentAddress: '',
			paymentSymbol: '',
			sendAmount: '',
			sendAddress: '',
			tempAddress: '',
			confirmation: true,
			metaMask: false
    }
  },
  computed: mapState({

    coinbase: state => state.web3.coinbase,
		merittBalance: state => {
			if (state.tab2.merittBalance) {
				var bal = (state.tab2.merittBalance).toFixed(2)
				return bal
			} else {
				var zero = 0
				return zero
			}
		},
		tableData: state => {
			if (state.tab2TableData) {
				return state.tab2TableData()
			}
		},
		merittSymbol(state) {
			this.loading = true
			this.completed = false
			if (state.tab2.merittSymbol) {
				this.loading = false
				this.completed = true
				return state.tab2.merittSymbol
			} else if (state.tab2.merittSymbol == false) {
        this.loading = false
				this.completed = true
      }

		},
		web3: state => state.web3.web3Instance(),
		DebtTokenContract: state => state.DebtTokenContract(),
		ethBalance: state => {
			if (state.web3.balance) {
					var balance = state.web3.balance/(1*(10**18))
					balance = Number(balance).toFixed(2)
					return balance
			} else {
				var zero = 0
				return zero
			}
    },
		ethBalanceUSD: state => {
			if (state.web3.balanceUSD != 0) {
				var balanceUSD = state.web3.balanceUSD/(1*(10**18))
				balanceUSD = Number(balanceUSD).toFixed(2)
				return balanceUSD
			} else {
					var zero = 0
					return zero
			}
		}
  }),
  methods: {
		MerittExchange: function (event) {
			var arrow
			if ((event.composedPath()).length == 19) {
				arrow =  event.composedPath()[2].firstChild.firstChild
			} else {
				arrow =  event.composedPath()[1].firstChild.firstChild
			}
			if (this.sendReceive) {
				this.sendReceive = false
				arrow.classList.remove("rotate-minus-180")
				arrow.classList.add("rotate-minus-90")
			} else {
				this.sendReceive = true
				arrow.classList.remove("rotate-minus-90")
				arrow.classList.add("rotate-minus-180")
			}
		},
		EtherExchange: function (event) {
			var arrow
			if ((event.composedPath()).length == 19) {
				arrow =  event.composedPath()[2].firstChild.firstChild
			} else {
				arrow =  event.composedPath()[1].firstChild.firstChild
			}
			if (this.sendReceiveEther) {
				this.sendReceiveEther = false
				arrow.classList.remove("rotate-minus-180")
				arrow.classList.add("rotate-minus-90")
			} else {
				this.sendReceiveEther = true
				arrow.classList.remove("rotate-minus-90")
				arrow.classList.add("rotate-minus-180")
			}
		},
		TokenExchange: function (event) {
			var id
			var arrow
			if ((event.composedPath()).length == 19) {
				id = event.composedPath()[2].attributes[1].value
				arrow =  event.composedPath()[2].firstChild.firstChild
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
		OpenConfirmation: function (event) {
			if (event.composedPath()[3][0].value == '') {
				event.composedPath()[3][0].placeholder = "Enter Address"
				event.composedPath()[3][0].className += " formInvalid"
				return
			} else if (!this.web3.utils.isAddress(event.composedPath()[3][0].value)) {
				event.composedPath()[3][0].value = ""
				event.composedPath()[3][0].placeholder = "Invalid Address"
				event.composedPath()[3][0].className += " formInvalid"
				return
			}  else if (event.composedPath()[3][1].value == '') {
				event.composedPath()[3][1].placeholder = "Enter Amount"
				event.composedPath()[3][1].className += " formInvalid"
				return
			} else if (event.composedPath()[3][1].value == 0) {
				event.composedPath()[3][1].value = ""
				event.composedPath()[3][1].placeholder = "Invalid Amount"
				event.composedPath()[3][1].className += " formInvalid"
				return
			}
			this.confirmation = true
			this.metaMask = false
			this.paymentAmount = event.composedPath()[3][1].value
			this.paymentSymbol = event.composedPath()[0].attributes.symbol.value
			this.paymentAddress = event.composedPath()[3][0].value
			this.tempAddress = event.composedPath()[0].attributes.address.value
			document.getElementById('confirmation').classList.add('in')
		},
		CloseConfirmation: function () {
			this.confirmation = true
			this.metaMask = false
			this.paymentAmount = ''
			this.paymentAddress = ''
			this.paymentSymbol = ''
			this.tempAddress = ''
			document.getElementById('confirmation').classList.remove('in')
		},
		Transfer: function (event) {
			var web3 = this.web3

			var paymentAddress = this.paymentAddress
			var Amount = new BigNumber(this.paymentAmount * (1*(10**18)))
			var tempAddress = this.tempAddress
			if (this.paymentSymbol == 'Meritt') {
				var MerittTokenContract = new web3.eth.Contract(MerittTokenABI, MerittTokenAddr)
				var data = MerittTokenContract.methods.transfer(paymentAddress,Amount).encodeABI()
				web3.eth.sendTransaction({
					"from": this.coinbase,
					"to": MerittTokenAddr,
					"data": data
				}).then(console.log)
			} else if (this.paymentSymbol == 'ETH') {
				web3.eth.sendTransaction({
					"from": this.coinbase,
					"to": paymentAddress,
					"value": Amount,
					"data": ''
				}).then(console.log)
			} else {
				var Contract = new web3.eth.Contract(DebtTokenABI, tempAddress)
				var data = Contract.methods.transfer(paymentAddress,Amount).encodeABI()
				web3.eth.sendTransaction({
					"from": this.coinbase,
					"to": tempAddress,
					"data": data
				}).then(console.log)
			}
			this.confirmation = false
			this.metaMask = true
			setTimeout( function () {
				document.getElementById('confirmation').classList.remove('in')
			},5000)
    },
		OpenPopup: function (event) {
			var input = event.composedPath()[3][0]
			if (input.value == '') {
				event.composedPath()[3][0].placeholder = "Enter Amount";
				event.composedPath()[3][0].className += " formInvalid"; //add the class .formInvalid to your element
				return
			}
			this.receiveAmount = event.composedPath()[3][0].value
			this.receiveAddress = event.composedPath()[0].attributes.address.value
			this.receiveSymbol = event.composedPath()[0].attributes.symbol.value
			document.getElementById('tokenPopupId').classList.add('in')
		},
		ClosePopup: function () {
			document.getElementById('tokenPopupId').classList.remove('in')
		},
		receiveDiv: function (event) {
			var id1, id2, id3
			if ((event.composedPath()).length == 24) {
				id1 = event.composedPath()[6].children[2].id
				id2 = event.composedPath()[6].children[3].id
				id3 = event.composedPath()[6].children[4].id
			} else {
				id1 = event.composedPath()[5].children[2].id
				id2 = event.composedPath()[5].children[3].id
				id3 = event.composedPath()[5].children[4].id
			}
			document.getElementById(id1).style.display = 'block'
			document.getElementById(id2).style.display = 'none'
			document.getElementById(id3).style.display = 'none'
		},
		exchangeDiv: function (event) {
			var id1, id2, id3
			if ((event.composedPath()).length == 24) {
				id1 = event.composedPath()[6].children[2].id
				id2 = event.composedPath()[6].children[3].id
				id3 = event.composedPath()[6].children[4].id
			} else {
				id1 = event.composedPath()[5].children[2].id
				id2 = event.composedPath()[5].children[3].id
				id3 = event.composedPath()[5].children[4].id
			}
			document.getElementById(id1).style.display = 'none'
			document.getElementById(id2).style.display = 'block'
			document.getElementById(id3).style.display = 'none'
		},
		sendDiv: function (event) {
			var id1, id2, id3
			if ((event.composedPath()).length == 24) {
				id1 = event.composedPath()[6].children[2].id
				id2 = event.composedPath()[6].children[3].id
				id3 = event.composedPath()[6].children[4].id
			} else {
				id1 = event.composedPath()[5].children[2].id
				id2 = event.composedPath()[5].children[3].id
				id3 = event.composedPath()[5].children[4].id
			}
			document.getElementById(id1).style.display = 'none'
			document.getElementById(id2).style.display = 'none'
			document.getElementById(id3).style.display = 'block'
		},
		ETHRateFun: function functionName() {
			this.$http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD').then(response => {
				this.ETHRate = response.body[0].price_usd
			}, response => {
				console.log(response)
			})
		},
		ScrollDown: function (event) {
      if ((event.composedPath()).length == 17) {
        event.composedPath()[6].children[1].scrollBy(0, 70);
      } else {
        event.composedPath()[5].children[1].scrollBy(0, 70);
      }
    },
    ScrollUp: function (event) {
      if ((event.composedPath()).length == 17) {
        event.composedPath()[6].children[1].scrollBy(0, -70);
      } else {
        event.composedPath()[5].children[1].scrollBy(0, -70);
      }
    },
	},
	beforeMount () {
		// this.ETHRateFun()
    // this.InitTable()
  },
	updated () {
		if (this.coinbase) {
			this.address = this.coinbase
		}
	}
}
</script>

<style scoped>
::-webkit-scrollbar {
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
