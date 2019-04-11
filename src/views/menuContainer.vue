<template>
    <div>
        <el-menu ref="elmenu" mode="vertical" :default-active="activeIndex"  background-color="#162238" text-color="#fff" style="width:200px;">
            <el-submenu subid="adminLeft" v-if="item.hasSubMenu" v-for="(item,index) in items" :isclose="isclose"
                        :index="String(item.index)" frompage="admin" menu-trigger="click">
                <a :id='item.id' slot="title" :title='item.text'>
                    <i :class="'com-menuContainer__'+item.icon_class"></i>
                    <span v-if="!isclose">{{item.text}}</span>
                </a>
                <el-menu-item v-for="(submenu,index) in item.submenus" :issubmenu="true" :isclose="isclose"
                              :index="String(submenu.index)" :needPassClickAction="true"
                              @emitclick="gotoPage(submenu.router)" @click="gotoPage(submenu.router)">
                    <a :id='submenu.id' :title="submenu.text"
                       :class="{'submenu_open_item':!isclose,'submenu_close_item':isclose}">
                        <li class="com-menuContainer__submenu-icon"></li>
                        <span>{{submenu.text}}</span>
                    </a>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="String(index)" :needPassClickAction="true" @click="gotoPage(item.router)">
                <a :id='item.id' :title="item.text">
                    <i :class="'com-menuContainer__'+item.icon_class"></i>
                    <span class="menu_text" v-if="!isclose">{{item.text}}</span>
                </a>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<style lang="scss" scoped>
    @import '../assets/img-path.scss';
    @import '../assets/menuContainer.scss';
</style>
<script>
    export default{
      name: 'menurouter',
      data() {
        return {
            activeIndex:'0-1'
        };
      },
      components: {},
      props: {
        isclose: {
          type: Boolean,
          require: false,
          default: false
        },
        items: {
          type: Array
        }
      },
      methods: {
        gotoPage: function(router) {
          let path = {name: router.homepagename};
          this.$router.push(path);
        },
        handleOpen() {
          this.state = 'open';
        },

        handleClose() {
          this.state = 'closed';
        }
      },
      created() {
          switch (this.$route.name) {
              case 'userManage':
                  this.activeIndex = '0-1';
                  break;
              case 'movieManage':
                  this.activeIndex = '0-2';
                  break;
              case 'dataAnalysis':
                  this.activeIndex = '1';
                  break;
          }
      }
    };
</script>
