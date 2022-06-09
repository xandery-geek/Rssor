<template>
    <div class="r-main">
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['far','user']" fixed-width /></span>
        User name
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['far','star']" fixed-width /></span>
        Favorite
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['fas', 'rss']" fixed-width /></span>
        RSS Sources
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['fas', 'sliders']" fixed-width /></span>
        Settings
      </div>
      <div class="r-category">
          <div style="position: relative;">
            <span class="r-span">Categories</span>
            <span style="position: absolute; right: 1rem;"><font-awesome-icon :icon="['fas', 'gear']" fixed-width /></span>
          </div>
          
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'cube']" fixed-width /></span>
            All articles
          </div>

          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            Paper
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            Game
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            News
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            Sports
          </div>

          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'plus']" fixed-width /></span>
            Add Category
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
  position: fixed;
  top: 0;
  bottom: 0;
  width: 200px;
  overflow: auto;
  background: $sidebar-bg;
  box-shadow: 2px 0 $sidebar-bg;
  padding: 0px;
}

.r-side-item{
  height: 2rem;
  line-height: 2rem;
  text-align: left;
  overflow: hidden;
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