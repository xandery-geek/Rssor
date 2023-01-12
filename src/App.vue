<template>
  <div v-if="launchAccountBoard === true">
    <AccountBoard/>
  </div>
  <div v-else>
    <MainBoard/>
  </div>
</template>

<script>
import MainBoard from './components/Main.vue'
import AccountBoard from './components/Account.vue'

export default {
  name: 'App',
  components: {
    MainBoard,
    AccountBoard
  },
  data() {
    return {
      tmp: false
    };
  },
  created() {
    
  },
  computed: {
    launchAccountBoard() {
      const url = this.$route.fullPath
      return url.startsWith('/account')
    }
  },
}
</script>

<style lang='scss'>

#app {
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255, 255, 255);
  
  // disable user select
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

</style>
