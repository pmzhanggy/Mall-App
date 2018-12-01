<template>
  <div class="homeContainer">
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for 必须要加:key -->
      <mt-swipe-item v-for="item in swipeList" :key="item.url">
        <img :src="item.url" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 宫格图 -->
    <ul id="myGridTable" class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">服饰</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">数码</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">家电</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">食品</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">旅游</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">办公</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      swipeList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getSwipeImg();
  },
  methods: {
    getSwipeImg() {
      // 获取轮播图数据的方法
      this.$http.get("https://www.apiopen.top/meituApi?page=12").then(result => {
        // console.log(result.body);
        if (result.body.code === 200) {
          this.swipeList = result.body.data;
          this.swipeList.splice(4);
        } else {
          Toast("加载失败");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>

.mint-swipe {
  height: 200px;
  // 轮播图
  .mint-swipe-item {
    text-align: center;
    &:nth-child(1) {
      background-color: skyblue;
    }
    &:nth-child(2) {
      background-color: #f40;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
    &:nth-child(4) {
      background-color: antiquewhite;
    }
    img {
      // width: 100%;
      height: 100%;
    }
  }
}
  // 宫格
.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: #fff ;
  .mui-table-view-cell {
    border: 0;
  }
}
</style>

