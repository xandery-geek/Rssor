<template>
  <div
    id="dashboard"
    >
    <div id="dashboard-card">
      <a-card hoverable v-for="article in articles" :key="article">
        <div class="r-cover">
          <img class="r-cover-img" :src="article.cover" />
        </div>
        <div class="r-text">
          <div class="r-title">{{ article.title }}</div>
          <div class="r-feed">
            <span><icon-font type="icon-star"/></span>
            &nbsp; • &nbsp;
            <span>{{ article.feed }}</span>
          </div>
        </div>
        <div class="r-footer">
          <p>{{ article.date }}</p>
          <div class="r-operation">
            <a-tooltip overlayClassName="r-tooltip">
              <template #title>{{ $t("dashboard.star") }}</template>
              <icon-font type="icon-star"/>
            </a-tooltip>
            <a-tooltip overlayClassName="r-tooltip">
              <template #title>{{ $t("dashboard.readed") }}</template>
              <icon-font type="icon-star"/>
            </a-tooltip>
          </div>
        </div>
      </a-card>
    </div>
    <div>
      <p>{{ $t("dashboard.no_more") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',

  data(){
    return {
      articles: [
        {
          id: 2,
          title: '兜兜转转，我还是想要一台无人机', 
          feed: 'AI', 
          cover: 'https://cdn.sspai.com/article/ecf50b5f-7c5d-d514-f8d6-c3959b88df5c.jpg',
          date: "Dec 2021",
          readed: false,
          favorite: false,
        },
        {
          id: 2,
          title: '兜兜转转，我还是想要一台无人机', 
          feed: 'AI', 
          cover: 'https://cdn.sspai.com/article/ecf50b5f-7c5d-d514-f8d6-c3959b88df5c.jpg',
          date: "Dec 2021",
          readed: false,
          favorite: false,
        },
        {
          id: 2,
          title: '兜兜转转，我还是想要一台无人机', 
          feed: 'AI', 
          cover: 'https://cdn.sspai.com/article/ecf50b5f-7c5d-d514-f8d6-c3959b88df5c.jpg',
          date: "Dec 2021",
          readed: false,
          favorite: false,
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

#dashboard{
  overflow: auto;
}


#dashboard-card{
  background-color: #FEFEFE;
  margin: 36px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .ant-card{
    border-radius: 0.8rem;
    width: 300px;
    max-width: 90%;
    min-height: 300px;
    padding-bottom: 12px;
    border: 1px solid #efefef;
    overflow: hidden;
    cursor: auto;
    margin: 12px;

    .ant-card-body{
      padding: 0;
    }

    .r-cover{
      height: 250px;
      width: 100%;
      cursor: pointer;
      .r-cover-img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .r-text{
      text-align: left;
      padding: 0 1rem 0 1rem;
      margin: 0.5rem 0 0.5rem 0;

      .r-title{
        font-weight: bold;
        font-size: 1.2rem;
        overflow: hidden;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        cursor: pointer;
      }

      .r-feed{

        cursor: pointer;
      }
    }

    .r-footer{
      display: flex;
      padding: 0 1rem 0 1rem;
      margin: 0.5rem 0 0.5rem 0;
      align-items: center;

      p{
        font-size: smaller;
      }
      .r-operation{
        margin-left: auto;
        font-size: 16px;

        span{
          padding-right: 0.5rem;
        }
      }
    }
  }
}
</style>

<style lang="scss">

#dashboard-card{
  .ant-card{
    .ant-card-body{
      padding: 0;
    }
  }
}

</style>