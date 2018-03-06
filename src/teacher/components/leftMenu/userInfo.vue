<template>
  <div class="user-info" v-if="show">
    <div class="img-box"><img v-if="userInfo.teacherAvatar!=''" :src="userInfo.teacherAvatar"/><span v-else class="default_img"></span></div>

    <div class="name">{{ userInfo.teacherName }}</div>
    <div class="detail">
      <span>{{ userInfo.grade }}{{ userInfo.subject }}</span>
      <span class="line"></span>
      <span>{{ userInfo.xingzhi }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'userInfo',
    data () {
      return {
        userInfo:{},//教师的基本信息
        show: false
      };
    },
    methods:{
      renderUserInfo: function () {
        var self = this;
//        self.axios.get('/teacherlive/teacher/userconfig').then((response) => {
        self.axios.post(this.URL_PREFIX +'/teacherlive/work/teacherinfo', {}).then((response) => {
          var res = response.data;
          if (res.errNo != 0) return self.show = false;
          self.userInfo = res.data;
          self.show = true;
        });
      }
    },
    created: function () {
      this.renderUserInfo();
      this.userInfo.teacherAvatar=""
    }
  };
</script>

<style lang="less">
  @import "../../style/variable";
  .user-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .img-box{
      width: 80px;
      height: 80px;
      border-radius: 100%;
      overflow: hidden;
      &>img{
        width:100%;
        height:100%;
      }
    }
    .name{
      padding: 8px;
      font-size: @font-14;
      color: @color-title;
    }
    .detail{
      font-size: @font-12;
      color: @color-content-light;
      display: flex;
      justify-content: space-between;
    }
    .line{
      display: inline-block;
      width: 1px;
      background: @color-content-light;
      margin: 0 4px;
    }
    .default_img{
      width: 100%;
      height: 100%;
      display: block;
      background: url('./img/default.png') center center no-repeat;
      background-size: 100%;
    }
  }
</style>
