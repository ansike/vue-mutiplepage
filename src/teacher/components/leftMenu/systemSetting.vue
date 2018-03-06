<template>
  <div class="system-setting">
    <ul>
      <li class="code-box" @click="setting('download')"><span class="showcode">下载一课APP</span><div class="qrcode"></div></li>
      <li @click="setting('system')">系统设置</li>
<!--       <li @click="setting('resetPwd')">修改密码</li>
      <li @click="setting('logout')">退出登录</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name : 'systemSetting',
  data () {
    return {};
  },
  methods : {
    setting: function (args) {
      switch (args){
        case 'download':
            //alert('download');
          break;
        case 'system':
          //alert('system');
          // winBridge.invokeMethod("onSettingBtn");
          break;
        case 'resetPwd':
          //alert('resetPwd');
          break;
        case 'logout':
          //alert('logout');
          break;
        default:
          alert('download');
      }
    }
  }
};
</script>

<style lang="less">
  @import "../../style/variable";
  .system-setting{
    ul{
      height: 65px;
      margin-top: 15px;
      li{
        text-align: center;
        height: 22px;
        line-height: 22px;
        background: none;
        color: @color-7d7c83;
        font-size: 12px;
        box-shadow: none;
        cursor: pointer;
        margin-bottom: 0;
        cursor: pointer;
        position: relative;
      }
    }
    .qrcode{
      position:absolute;
      top: -100px;
      left: 5px;
      width: 100px;
      height: 100px;
      background: url('./img/qrcode.png') center center no-repeat ;
      background-size: 100% 100%;
      transform:scale(0) rotate(180deg);
      transition: all .3s ease-in-out;
    }
    .showcode:hover+.qrcode{
      transform:scale(1) rotate(360deg);
      transition: all .3s ease-in-out;
    }

  }
</style>
