<template>
  <div class="r-container">
      <div class="r-navbar">
        <div class="r-icon">
          <img src="/favicon.ico">
        </div>
        <div class="r-title">
          {{ $t('common.app') }}
        </div>
      </div>
      <div class="r-main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AccountBoard'
}
</script>

<style scoped lang="scss">

.r-container{
  width: 100%;

  .r-navbar{
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    max-width: 1000px;
    padding-left: 20px;
    padding-right: 20px;
    transition: height 250ms ease 0s;
    height: 80px;
    position: relative;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px;
    margin: 0 auto;

    .r-icon{
      width: 2rem;
      height: 2rem;
      display: block;
      margin-right: 1rem;
    }

    .r-title{
      font-weight: 500;
      font-size: 16px;
    }
  }

  .r-main{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
}

</style>