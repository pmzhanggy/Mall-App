<template>
  <div class="newsinfoContainer">
    <h3 class="title">{{ newsContentList.title }}</h3>
    <p class="subtitle">
      <span>发表时间:{{ newsContentList.created_at | dateFormat}}</span>
      <!-- <span>阅读:{{}}</span> -->
    </p>
    <hr>
    <div class="content" v-html="newsContentList.content"></div>
    <comment></comment>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comment from '../subcomponents/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params._id,
      newsContentList: null
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/history/content/2/1").then(result => {
        if (result.body.error === false) {
          this.newsContentList = result.body.results[1];
        } else {
          Toast("获取失败");
        }
      });
    }
  },
  components: {
    comment,
  }
};
</script>

<style lang="scss">
.newsinfoContainer {
  padding: 10px;
  .title {
    line-height: 1.5em;
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
  }
  .subtitle {
    font-size: 12px;
    color: #999;
    display: flex;
    justify-content: space-between;
    span {
      margin-left: 5px;
    }
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>

