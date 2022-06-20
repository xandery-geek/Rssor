<template>
    <div class="r-main">
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['far','user']" fixed-width /></span>
        <span>Username</span>
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['far','star']" fixed-width /></span>
        <span>Favorite</span>
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['fas', 'rss']" fixed-width /></span>
        <span>RSS Sources</span>
      </div>
      <div class="r-side-item">
        <span class="r-span"><font-awesome-icon :icon="['fas', 'sliders']" fixed-width /></span>
        <span>Settings</span>
      </div>
      <div class="r-category">
          <div style="position: relative;">
            <span class="r-span">Categories</span>
            <span style="position: absolute; right: 1rem;"><font-awesome-icon :icon="['fas', 'gear']" fixed-width /></span>
          </div>
          
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['far', 'newspaper']" fixed-width /></span>
            <span>All articles</span>
          </div>

          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            <span>Paper</span>
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            <span>Game</span>
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            <span>Paper</span>
          </div>
          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span>
            <!-- <span class="r-span"><font-awesome-icon :icon="['fas', 'angle-down']" fixed-width /></span> -->
            <span>Sports</span>
          </div>

          <div class="r-side-item">
            <span class="r-span"><font-awesome-icon :icon="['fas', 'plus']" fixed-width /></span>
            <span>Add Category</span>
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
  cursor: pointer;
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