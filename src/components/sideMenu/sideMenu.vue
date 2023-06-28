<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="handleClick">
    <a-menu-item key="1">
      <user-outlined/>
      <span class="nav-text">
      <router-link to="/">搜索</router-link>
      </span>
    </a-menu-item>
    <a-menu-item key="2">
      <video-camera-outlined/>
      <span class="nav-text"><router-link to="/document">文档</router-link></span>
    </a-menu-item>
    <a-menu-item key="3">
      <upload-outlined/>
      <span class="nav-text"><router-link to="/tool">工具</router-link></span>

    </a-menu-item>
    <a-menu-item key="4">
      <user-outlined/>
      <span class="nav-text"><router-link to="/other">杂七杂八</router-link></span>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons-vue';
import type {MenuProps, ItemType} from 'ant-design-vue';
// type用于引入类型而不是实际值,编译时只有类型信息被导入,而不包含实际代码
const selectedKeys = ref<string[]>(['1']);

const handleClick: MenuProps['onClick'] = (keys) => {
  if (keys.key === '1') {
    console.log('搜索')
  }
  if (keys.key === '2') {
    console.log('文档')
  }
  if (keys.key === '3') {
    console.log('工具')
  }
  if (keys.key === '4') {
    console.log('杂七杂八')
  }
};


</script>
<style scoped>
.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
