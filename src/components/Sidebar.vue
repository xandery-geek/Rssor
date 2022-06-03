<template>
    <div class="r-main">
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['far','user']" fixed-width /></span>
        User name
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['fas','chart-simple']" fixed-width /></span>
        DashBoard
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['fas', 'rss']" fixed-width /></span>
        RSS Sources
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['fas', 'gear']" fixed-width /></span>
        Settings
      </div>
      <div class="r-category">
          <span class="r-span">Categories</span>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            Reading
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            Reading
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            Reading
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            Reading
          </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'SideBar',
}
</script>

<style scoped lang='scss'>
.r-main{
  height: 100%;
  background: $sidebar-bg;
  box-shadow: 2px 0 $sidebar-bg;
  padding: 0px;
}

.r-side-item{
  height: 2rem;
  line-height: 2rem;
  text-align: left;
  .r-span{
   padding-left: 1rem;
   padding-right: 0.5rem;
  }
}

.r-side-item:hover{
  background: $sidebar-hover-bg;
}

.r-category{
  text-align: left;
  margin-top: 2rem;
  .r-span{
    padding-left: 1rem;
  }
}


</style>