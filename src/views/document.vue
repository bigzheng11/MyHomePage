<template>
  <div class="container">
    <a-card hoverable style="width: 240px;height: 290px;" v-for="(item,index) in website_list" :key="item.id"
            class="website-item"
            @click="toJump(item.url)"
    >
      <template #cover>
        <img
            alt="example"
            :src="item.url+'/favicon.ico'"
            style="width: 80px;margin: 30px auto"
        />
      </template>
      <template #actions>
        <setting-outlined key="setting"/>
        <edit-outlined key="edit"/>
        <ellipsis-outlined key="ellipsis"/>
      </template>
      <a-card-meta :title="item.name" :description="item.url">
        <template #avatar>
          <!--<a-avatar src="https://joeschmoe.io/api/v1/random"/>-->
        </template>
      </a-card-meta>
    </a-card>
    <a-button type="primary" :size="size" style="margin: 30px" @click="addWebsite2">
      <template #icon>
        <plus-outlined/>
      </template>
      添加
    </a-button>


    <!--HTML -------------------- 添加弹出框 ---------------------->
    <add-website ref="addWebsite_child"></add-website>
  </div>
</template>
<script setup lang="ts">
import {SettingOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons-vue';
import {api_website_list} from "@/api/request/website";
import {reactive, ref} from "vue";
import {PlusOutlined} from '@ant-design/icons-vue';
import addWebsite from '@/components/addModel/addWebsite.vue';

import type {SizeType} from 'ant-design-vue/es/config-provider';
// 开始获取列表
interface website_item {
  id: number;
  url: string;
  name: string;
}

const size = ref<SizeType>('large');
let website_list = reactive<website_item[]>([])
api_website_list().then((res) => {
  Object.assign(website_list, res.data)
})

// 跳转
const toJump = (url: string) => {
  window.open(url)
}


const addWebsite_child = ref()
const addWebsite2 = () => {
  console.log('addWebsite_child.value',addWebsite_child)
  addWebsite_child.value.showModal()
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  /*justify-content: center;*/
  flex-wrap: wrap;
}

.website-item {
  margin-right: 15px;
  margin-bottom: 10px;
}

</style>
