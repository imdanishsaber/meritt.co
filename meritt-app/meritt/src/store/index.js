import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getWeb3 from '../util/getWeb3'
import pollWeb3 from '../util/pollWeb3'
import getContract from '../util/getContract'

Vue.use(Vuex)
export const store = new Vuex.Store({
  strict: true,
  state,
  mutations: {
    registerWeb3Instance (state, payload) {
      let result = payload
      let web3Copy = state.web3
      web3Copy.coinbase = result.coinbase
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.web3Instance = result.web3
      state.web3 = web3Copy
      pollWeb3()
    },
    pollWeb3Instance (state, payload) {
      state.web3.coinbase = payload.coinbase
      state.web3.balance = parseInt(payload.balance, 10)
    },
    registerContractInstance (state, payload) {
      state.MerittContract = () => payload[0]
      state.DebtTokenContract = () => payload[1]
    },
    tab2MerittMutation (state, payload) {
      state.merittBalance = () => payload[0],
      state.merittSymbol = () => payload[1]
    },
    tab2TableDataMutation (state, payload) {
      state.tab2TableData = () => payload
    },
    tab3TableDataMutation (state, payload) {
      state.tab3TableData = () => payload
    },
    tab4TableDataMutation (state, payload) {
      state.tab4TableData = () => payload
    },
    tab4MarketPlaceMutation (state, payload) {
      state.tab4MarketPlace = () => payload

    },
  },
  actions: {
    registerWeb3 ({commit}) {
      getWeb3.then(result => {
        commit('registerWeb3Instance', result)
      }).catch(e => {
        alert('Unable to connect to Metamask')
        console.log('Unable to connect to Metamask', e)
      })
    },
    pollWeb3 ({commit}, payload) {
      commit('pollWeb3Instance', payload)
    },
    getContractInstance ({commit}) {
      getContract.then(result => {
        commit('registerContractInstance', result)
      }).catch(e => console.log(e))
    },
    tab2MerittAction ({commit}, payload) {
      commit('tab2MerittMutation', payload)
    },
    tab2TableDataAction ({commit}, payload) {
      commit('tab2TableDataMutation', payload)
    },
    tab3TableDataAction ({commit}, payload) {
      commit('tab3TableDataMutation', payload)
    },
    tab4TableDataAction ({commit}, payload) {
      commit('tab4TableDataMutation', payload)
    },
    tab4MarketPlaceAction ({commit}, payload) {
      commit('tab4MarketPlaceMutation', payload)
    },
  }
})
