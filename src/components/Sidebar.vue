<template>
  <a-layout-sider
    id="sidebar"
    :theme="style.theme"
    :style="{ overflow: 'auto', height: '100vh'}"
    v-model:collapsed="style.collapsed" 
    collapsible
  >
    <a-menu
      id="sidebar-menu"
      class="r-menu"
      v-model:selectedKeys="style.selectedKey" 
      :theme="style.theme" 
      mode="inline"
    >
      <a-menu-item-group key="g1">
        <a-menu-item key="user" class="r-menu-item">
          <icon-font type="icon-user1"/>
          <span>{{ username }}</span>
        </a-menu-item>
        <a-menu-item key="favorite" class="r-menu-item">
          <icon-font type="icon-star"/>
          <span>{{ $t("sidebar.favorite") }}</span>
        </a-menu-item>
        <a-menu-item key="sources" class="r-menu-item">
          <icon-font type="icon-rss"/>
          <span>{{ $t("sidebar.sources") }}</span>
        </a-menu-item>
        <a-menu-item key="setting" class="r-menu-item">
          <icon-font type="icon-setting"/>
          <span>{{ $t("sidebar.setting") }}</span>
        </a-menu-item>
      </a-menu-item-group>

      <a-menu-item-group key="g2">
        <template #title>{{ $t("sidebar.feeds") }}</template>

        <a-sub-menu v-for="category in categries" :key="category.name" class="r-submenu">
          <template #title>
            <span>
              <icon-font type="icon-category"/>
              <span>
                {{category.name}}
              </span>
            </span>
          </template>
          <a-menu-item v-for="feed in category.data" :key="feed.name" class="r-menu-item">
            <span>
              <icon-font type="icon-rss"/>
              <span>
                {{ feed.name }}
              </span>
              <a-badge
                :count="feed.count"
                :number-style="{
                  backgroundColor: '#294973',
                  color: '#d7dde4',
                  boxShadow: '0 0 0 0px #d9d9d9 inset',
                }"
                @click="onReaded"
              />
            </span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item class="r-menu-item">
          <icon-font type="icon-addition"/>
          <span>Add new</span>
        </a-menu-item>

      </a-menu-item-group>
    </a-menu>
  </a-layout-sider>
</template>


<script>

export default {
  name: 'SideBar',
  components: {
  },

  data() {
    return {
      style: {
        theme: 'light',
        collapsed: false,
        keyOptions: ['user, favorite, sources, setting'],
        selectedKey: [], 
      },
      username: 'Username',
      categries:[
        {name: "Books", id: 1, data: [
          {name: "Reading 1", id:2, count:0},
          {name: "Reading 2", id:3, count:1},
          {name: "Reading 3", id:4, count:2}
        ]},
        {name: "Movies", id: 1, data: [
          {name: "Movie 1", id:2, count:0},
          {name: "Movie 2", id:3, count:1},
          {name: "Movie 3", id:4, count:2}
        ]},
        {name: "Colleage", id: 1, data: [
          {name: "Colleage 1", id:2, count:0},
          {name: "Colleage 2", id:3, count:1},
          {name: "Colleage 3", id:4, count:2}
        ]}
      ]
    };
  },
  methods: {
    onReaded() {
      confirm('onReaded:');
    }
  },
}
</script>

<style lang='scss'>

#sidebar{
  background-color: $sidebar-bg;
  .r-menu{
    font-size: 14px;
    font-weight: 500;
    background-color: $sidebar-bg;
    border: none;

    .r-menu-item, .r-submenu{
      color: $sidebar-color;
    }

    .r-menu-item:hover, .r-submenu:hover{
      background-color: $sidebar-hover-bg;
      color: $sidebar-color;
    }

    .r-submenu{
      .ant-menu{
        background-color: $sidebar-bg;
      }
    }

    .ant-badge{
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translate(0, -50%);

      .ant-badge-count{
        background-color: $sidebar-bg;
        color: $sidebar-color;
        font-size: 12px;
      }
    }

    .ant-menu-item-group-title, .ant-menu-submenu-arrow{
      color: $sidebar-color;
    }

    .ant-menu-submenu-title:hover, .ant-menu-submenu-arrow:hover{
      color: $sidebar-color;
    }

    .ant-menu-item-selected{
      background-color: $sidebar-selected-bg;
      color: $sidebar-selected-color;
    }
  }
}

</style>