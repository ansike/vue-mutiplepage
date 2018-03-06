<template>
  <div class="menu-list">
    <ul>
      <li v-for="item in menuData" :class="{ 'active' :item.id == currentPid}" @click="menuId(item.id)">
        <router-link :to="{path:''+item.url,query:{'id':item.id}}">
          <span class="menu-bg" :class="urlToClass[item.url]"></span>
          <span class="menu-text">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'menuList',
    data () {
      return {
        menuData:[],
        urlToClass:{
          '/':'index',
          '/handout':'index',
          '/classmanage':'index',
          '/teachmanage':'index'
        },
        currentPid: 0,
      };
    },
    beforeCreate(){


    },
    created(){
      var that = this;
      //初始化左侧menu选项
      this.getMenu(() => {
        //初始化menu的hover位置
        var pathname = location.pathname.split('/static/workbench')[1];
        that.menuData.reduce((prev,cur,index) => {
          if(pathname==cur.url){
            sessionStorage.setItem("currentPid",cur.id);
            this.currentPid = cur.id;
            return
          }
        },{})
      });
    },
    mounted(){
    },
    updated(){
      //处理讲义管理的默认tab－－－handoutmanagement的index.vue中用到
      var pathname = location.pathname.split('/static/workbench')[1];
      if(pathname !="/handout" && pathname !="/detail"){
        sessionStorage.setItem("activeName","000");
      }
    },
    methods:{
      menuId: function (id) {
        this.currentPid = id;
        sessionStorage.setItem("currentPid",id);
      },
      getMenu(cb){
        this.menuData = [
          {
            id:1,
            url:'/',
            title:'我的首页'
          },
          {
            id:2,
            url:'/',
            title:'我的课程',
          },
          {
            id:3,
            url:'/',
            title:'我的学生',
          },
          {
            id:4,
            url:'/',
            title:'个人信息',
          },
        ]
        // this.axios.get(this.URL_PREFIX+'/teacherlive/work/getmenu').then((res) => {
        //   var res=res.data, that=this;
        //   if(res.errNo==0){
        //     that.menuData=res.data;
        //     cb && cb();
        //   }else{
        //     this.$message({
        //       type: 'error',
        //       message: res.errstr
        //     });
        //   }
        // })
      }
    }
  };
</script>

<style lang="less">
@import '../../style/variable';
.menu-list{
  ul{
    height: 200px;
    li{
      border-radius: 6px;
      width:110px;
      height:40px;
      line-height: 40px;
      font-size: @font-14;
      color: @color-title;
      margin-bottom: @font-14;
      transition: background .1s;
      &:hover{
        background: #f2f2f2;
        // box-shadow:0 0 10px 0 rgba(76,199,96,0.50);
        a{
          color: @color-title;
        }
        &.index{
          background-position: 0 -24px;
        }
        &.handouts{
          background-position: -24px -24px;
        }
        &.classmanage{
          background-position: -48px -24px;
        }
        &.teachmanage{
          background-position: -72px -24px;
        }
      }
      &.active{
        box-shadow:0 0 10px 0 rgba(76,199,96,0.50);
        background: @color-main;
        a{
          color: @color-white;
        }

        .index{
          background-position: 0 0 !important;
        }
        .handouts{
          background-position: -24px 0 !important;
        }
        .classmanage{
          background-position: -48px 0 !important;
        }
        .teachmanage{
          background-position: -72px 0 !important;
        }
        .menu-text{
          color: @color-white;
        }
      }
      a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      .menu-bg{
        display: inline-block;
        width: 24px;
        height: 24px;
        overflow: hidden;
        background: url('../../assets/menu-bg.png') no-repeat;
        margin-right: 5px;
        &.index{
          background-position: 0 -24px;
        }
        &.handouts{
          background-position: -24px -24px;
        }
        &.classmanage{
          background-position: -48px -24px;
        }
        &.teachmanage{
          background-position: -72px -24px;
        }
      }
      .menu-text{
        color: @color-title;
      }
    }
  }
}
</style>
