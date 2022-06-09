<template>
  <div class="r-container">
    <div class="row no-warp">
      <div class="r-sidebar">
        <div class="row">
          <SideBar/>
        </div>
      </div>
      <div class="r-main-board">
        <div class="row">
          <NavBar/>
        </div>
        <div class="row">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import SideBar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style lang='scss'>

body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255, 255, 255);
}

.r-container{
  padding-left: 12px;
  padding-right: 12px;
  
  .row{
    &.no-warp{
      flex-wrap: nowrap;
    }
  }
  .r-sidebar{
    flex: 0, 0, auto;
    width: 200px;
  }

  .r-main-board{
    flex: 1 1 auto;
  }
}


</style>
