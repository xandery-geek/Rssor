<template>
  <!-- Navbar -->
  <div class="r-navbar">
    <div class="r-left">
      <span><font-awesome-icon :icon="['fa','folder-open']" fixed-width /></span> 
      Category
    </div>
    <div class="r-right">
      <div>
        <div class="btn-group btn-group-sm" role="group" aria-label="content selector">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
        <label class="btn btn-outline-dark" style="outline: none; box-shadow: none;" for="btnradio1">Unreaded</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
        <label class="btn btn-outline-dark" style="outline: none; box-shadow: none;" for="btnradio2">Readed</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-dark" style="outline: none; box-shadow: none;" for="btnradio3">All</label>
        </div>
      </div>
      <div class="r-operation">
        <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Refresh articles"><font-awesome-icon :icon="['fa','arrow-rotate-right']"/></span>
        <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"><font-awesome-icon :icon="['fa','magnifying-glass']"/></span>  
        <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Reading option"><font-awesome-icon :icon="['far','eye']" /></span>
        <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Other option"><font-awesome-icon :icon="['fa','ellipsis']" /></span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang='scss'>
.r-navbar{
  display: flex;
  color: black; 
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: inset 0 -1px 0 #efefef;

  span:first-child{
    padding-right: 0.5rem;
  }

  .r-left{
    display: flex;
    min-width: 50px;
    flex: 0 5 auto;
    display: flex;
    align-items: center;
  }

  .r-right{
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    align-items: center;

    .r-operation{
      padding-left: 1rem;
      span{
        cursor: pointer;
        padding-right: 1rem;
        font-size: 1.2rem;
      }
    }
  }
}

</style>