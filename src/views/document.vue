<template>
  <div class="container">
    <a-card hoverable style="width: 240px;height: 290px;" v-for="(item,index) in website_list.data" :key="item.id"
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
        <edit-outlined key="edit" @click.stop="handeEdit(item)"/>
        <delete-outlined key="delete" @click.stop="handeDelete(item)"/>
      </template>
      <a-card-meta :title="item.name" :description="item.url">
        <template #avatar>
        </template>
      </a-card-meta>
    </a-card>
    <a-button type="primary" :size="size" style="margin: 30px" @click="openChildModal">
      <template #icon>
        <plus-outlined/>
      </template>
      添加
    </a-button>
    <!--HTML -------------------- 添加弹出框 ---------------------->
    <add-website :isopen="isopen" @close-model="closeChildModal" @select_list="handleQuery"></add-website>
  </div>
</template>
<script setup lang="ts">
import {DeleteOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons-vue';
import {api_website_delete, api_website_edit, api_website_list} from "@/api/request/website";
import {reactive, ref} from "vue";
import {PlusOutlined} from '@ant-design/icons-vue';
import addWebsite from '@/components/addModel/addWebsite.vue';
import type {SizeType} from 'ant-design-vue/es/config-provider';
import {notification} from "ant-design-vue";
import {api_logo} from "@/api/request/logo";

// 开始获取列表
interface website_item {
  id: number;
  url: string;
  name: string;
  logo?: string;
}

const size = ref<SizeType>('large');
let website_list = reactive<{ data: website_item[] }>({data: []})

// 使用正则表达式匹配并替换URL前缀
const removeUrlPrefix = (url: string): string => {
  const updatedUrl = url.replace(/^https?:\/\//i, '');
  return updatedUrl;
};

const handleQuery = () => {
  api_website_list().then((res) => {
    website_list.data = res.data

    website_list.data.forEach((item) => {
      // item.logo
      // console.log('item.url',item.url)

      api_logo(removeUrlPrefix(item.url)).then((res) => {
        console.log('网站', res)
        // item.logo=res
      }).catch((err) => {
        console.log(err)
      })


    })


    console.log("website_list", website_list)

  })
}

handleQuery()

interface Item {
  id: number;
  name: string;
  url: string
}

const handeDelete = (item: Item) => {
  // type Params=Pick<Item,'id'>
  // let params:Pick<Item,'id'>={
  //   id:item.id
  // }
  let params: number = item.id
  api_website_delete(params).then((res) => {
    console.log(res)
    notification['success']({
      message: '删除成功',
      description:
          '已经将此网站成功删除',
    });

    handleQuery()

  }).catch((err) => {
    console.log(err)
  })
}
const handeEdit = (item: Item) => {
  // api_website_edit().then((res) => {
  //   console.log(res)
  // }).catch((err) => {
  //   console.log(err)
  // })
}

// 跳转
const toJump = (url: string) => {
  window.open(url)
}


const isopen = ref<boolean>(false);
const openChildModal = () => {
  // console.log('addWebsite_child.value',addWebsite_child.value)
  isopen.value = true;
  console.log('isopen.value', isopen.value)
}

const closeChildModal = () => {
  // console.log('addWebsite_child.value',addWebsite_child.value)
  isopen.value = false;
  console.log('isopen.value', isopen.value)
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.website-item {
  margin-right: 15px;
  margin-bottom: 10px;
}

</style>
