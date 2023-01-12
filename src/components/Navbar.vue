<template>
  <a-layout-header 
    id="navbar"
  >
    <div class="r-navbar">
      <div class="r-navbar-left">
        <a-dropdown :trigger="['click']">
          <div class="r-navbar-feed">
            <span class="r-navbar-icon">
              <icon-font type="icon-file"/>
            </span>
            {{ title }}
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <span @click="onProperty">{{ $t("navbar.property") }}</span>
              </a-menu-item>
              <a-menu-item key="1">
                <span @click="onSetAsStartPage">{{ $t("navbar.start_page") }}</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        
      </div>
      <div class="r-navbar-extra">
        <div>
          <a-radio-group v-model:value="bind_values.article_group" class="r-navbar-btn">
            <a-radio-button value="unreaded">{{ $t('navbar.unreaded') }}</a-radio-button>
            <a-radio-button value="all">{{ $t('navbar.all') }}</a-radio-button>
          </a-radio-group>
        </div>
        <div v-for="operation in operations" 
          :key="operation" 
          class="r-navbar-operation" 
          @click="operation.onClick"
        >
          <a-tooltip overlayClassName="r-tooltip">
            <template #title>{{ operation.name }}</template>
            <icon-font :type="operation.icon"/>
          </a-tooltip>
        </div>

        <div>
          <a-dropdown :trigger="['click']" overlayClassName="r-navbar-option">
            <div class="r-navbar-operation">
              <icon-font type="icon-eye"/>
            </div>
            <template #overlay>
              <a-menu>
                <div class="r-option-group">
                  {{ $t("navbar.reading_option.layout") }}
                </div>
                <a-menu-item v-for="option in reading_options" :key="option">
                  <span class="r-option-icon">
                    <icon-font :type="option.icon"/>
                  </span>
                  <span @click="option.onClick(option.value)">{{ option.name }}</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>


<script>
export default {
  name: 'NavBar',

  data(){
    return {
      title: 'AI',
      operations: [
        {name: this.$t('navbar.previous'), icon: "icon-up", onClick: this.onPrevious},
        {name: this.$t('navbar.next'), icon: "icon-down", onClick: this.onNext},
        {name: this.$t('navbar.refresh'), icon: "icon-refresh", onClick: this.onRefresh},
        {name: this.$t('navbar.search'), icon: "icon-search", onClick: this.onSearch},
      ],
      reading_options: [
        {name: this.$t('navbar.reading_option.list_view'), icon: "icon-list", onClick: this.onSetView, value: 'list'},
        {name: this.$t('navbar.reading_option.card_view'), icon: "icon-card", onClick: this.onSetView, value: 'card'},
        {name: this.$t('navbar.reading_option.magazine_view'), icon: "icon-magazine", onClick: this.onSetView, value: 'magazine'},
      ],
      bind_values:{
        article_group: 'unreaded'
      }
    }
  },
  methods: {
    onProperty(){
      confirm("onProperty")
    },

    onSetAsStartPage(){
      confirm("onSetAsStartPage")
    },

    onPrevious(){
      confirm("onPrevious")
    },
    onNext(){
      confirm("onPrevious")
    },
    onRefresh(){
      confirm("onPrevious")
    },
    onSearch(){
      confirm("onPrevious")
    },
    onSetView(value){
      confirm("onSetView:" + value)
    }
  }
}
</script>

<style scoped lang='scss'>

#navbar{
  height: 48px;
  line-height: 48px;
  padding: 0;
  box-shadow: inset 0 -1px 0 #efefef;
  background-color: transparent;

  .r-navbar{
    display: flex;
    justify-content: space-between;

    .r-navbar-left{
      display: flex;
      color: #1a2433;
      font-size: 16px;
      font-weight: 500;
      padding: 0 12px 0 12px;

      .r-navbar-feed{
        cursor: pointer;
      }

      .r-navbar-icon{ 
        margin-right: 12px;
        width: 20px;
        height: 20px;
      }
    }

    .r-navbar-extra{
      display: flex;
      padding: 0 12px 0 12px;

      .r-navbar-btn{
        margin-right: 12px;

        .ant-radio-button-wrapper:first-child{
          border-radius: 3px 0 0 3px;
        }

        .ant-radio-button-wrapper:last-child{
          border-radius: 0 3px 3px 0;
        }

        .ant-radio-button-wrapper:hover{
          background-color: #f5fbff;
          color: #5b93e1;
        }

        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
          color: #707D90;
          background-color: #f9f9fb;
          border: 1px solid #d1dae6;
        }

        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):last-child{
          border-left-width: 0;
        }

        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
          background-color: #d9d9d9;
        }

        .ant-radio-button-wrapper:focus, .ant-radio-button-wrapper:focus-within{
          outline: none;
          box-shadow: none;
        }
      }

      .r-navbar-operation{
        height: 48px;
        line-height: 52px;
        padding: 0 12px 0 12px;
        color: #53585f;
        cursor: pointer;
        font-size: 16px;
        position: relative;
        min-width: 16px;
      }
    }
  }
}
</style>


<style lang='scss'>

.r-tooltip{

  .ant-tooltip-arrow-content {
    background-color: #edf0f3;
  }

  .ant-tooltip-inner{
    color: #333;
    background-color: #edf0f3;
    border-radius: 5px;
    padding: 4px 8px;
    min-height: 20px;
    font-size: 12px;
    box-shadow: none;
  }
}

.r-navbar-option{
  .r-option-group{
    font-size: 12px;
    padding: 4px 16px;
    text-overflow: ellipsis;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    font-style: normal;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
    color: #8a8e93;
  }

  .r-option-icon{
    padding-right: 12px;
  }
}

</style>
