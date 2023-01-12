<template>
  <a-layout style="min-height: 100vh">
    <side-bar/>
    <a-layout id="mainboard">
      <nav-bar/>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </a-layout>
  </a-layout>
</template>

<script>
import NavBar from './Navbar.vue'
import SideBar from './Sidebar.vue'

export default {
  name: 'MainBoard',
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style lang='scss'>

#mainboard{
  background-color: #FEFEFE;
  height: 100vh;
}

</style>
