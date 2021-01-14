<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'full',
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
    this.$store.dispatch('getContractInstance')
  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
}
</script>
