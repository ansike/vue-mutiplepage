<template>
  <div class="left-menu">
    <div class="left-menu-top">
      <menuList/>
    </div>
    <div class="left-menu-bottom">
        <userInfo/>
        <syetemSetting/>
    </div>
  </div>
</template>

<script>
import menuList from './menu';
import userInfo from './userInfo';
import syetemSetting from './systemSetting';

export default {
  name: 'leftMenu',
  data () {
    return {};
  },
  mounted() {
  },
  components:{
    menuList,
    userInfo,
    syetemSetting
  }
};
</script>

<style lang="less">
  .left-menu{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    .left-menu-top{}
    .left-menu-bottom{
      width: 110px;
      height: 180px;
    }
  }
</style>
