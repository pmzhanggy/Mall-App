<template>
  <div class="newsContainer">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item._id">
        <router-link :to="'/home/newsinfo/' + item._id">
          <img class="mui-media-object mui-pull-left">
          <div class="mui-media-body">
            {{ item.title }}
            <p class="mui-ellipsis">
              <!-- <span>类型:{{ item.category}} </span> -->
              <span>发布时间:{{ item.created_at | dateFormat('YYYY-MM-DD')}}</span>
              <!-- <span>阅读:{{ item.tcount }}</span> -->
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui';

export default {
  data() {
    return {
      newsList: null,
    }
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/history/content/2/1").then(result => {
        if(result.body.error === false) {
          this.newsList = result.body.results;
        } else {
          Toast('获取失败');
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>

.mui-ellipsis {
  font-size: 12px;
  color:#999;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  span {
    margin-left:3px;
  }
}
</style>
