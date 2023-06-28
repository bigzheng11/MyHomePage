<template>
  <a-layout>
    <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
    >
      <div class="logo"/>
      <!--<logo></logo>-->
      <side-menu></side-menu>
    </a-layout-sider>
    <a-layout>
      <top-menu></top-menu>
      <!--中间内容-->
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px',height:'100%' }">
          <router-view/>
        </div>
      </a-layout-content>
      <!--底部-->
      <a-layout-footer style="text-align: center">
         My Home Page©2023 Created by BigZheng
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import sideMenu from '@/components/sideMenu/sideMenu.vue'
import topMenu from '@/components/topMenu/topMenu.vue'
import logo from '@/components/logo/logo_pic.vue'
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };
    return {
      onCollapse, onBreakpoint
    }
  },
  components: {
    UploadOutlined, VideoCameraOutlined, UserOutlined,
    sideMenu, topMenu,logo
  }
})
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}


.ant-layout {
  min-height: 100%;
  width: 100%;

}
</style>
