<template>
<router-view></router-view>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
  },
  data () {
    return {

    }
  },
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
    this.$store.dispatch('getContractInstance')
  },
  computed: mapState({
    coinbase: state => state.web3.coinbase,
    balance: state => state.web3.balance,
    ethBalance: state => {
      if (state.web3.web3Instance !== null) return state.web3.web3Instance().fromWei(state.web3.balance, 'ether')
    }
  }),
  methods: {

  },
  beforeMount () {

  },
}
</script>

<style scoped>
</style>
