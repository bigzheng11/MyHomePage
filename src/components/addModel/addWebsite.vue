<template>
  <div>
    <a-modal v-model:open="props.isopen" title="Basic Modal" @ok="handleOk" @cancel="handleCancel">
      <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            label="网址"
            name="url"
            :rules="[{ required: true, message: '请输入网址' }]"
        >
          <a-input v-model:value="formState.url">
            <template #addonBefore>
              <a-select v-model:value="formState.url_http" style="width: 90px">
                <a-select-option value="Http://">Http://</a-select-option>
                <a-select-option value="Https://">Https://</a-select-option>
              </a-select>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            label="名称"
            name="name"
            :rules="[{ required: true, message: '请输入名称' }]"
        >
          <a-input v-model:value="formState.name"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import {api_website_website, api_website_list} from "@/api/request/website";
import {notification} from 'ant-design-vue';

const props = defineProps({
  isopen: Boolean,
});
const emit = defineEmits(['close-model'])//这里最好写出来
const handleOk = (e: MouseEvent) => {
  emit("close-model", false);
  type Params = Pick<FormState, 'url' | 'name'>
  let params: Params = {
    url: `${formState.url_http}${formState.url}`,
    name: formState.name
  }
  // 弹窗提示
  api_website_website(params).then((res) => {
    console.log(res)
    notification['success']({
      message: '添加成功',
      description:
          '网站已经成功添加进了「文档」中',
    });

    // 清空
    formState.url=''
    formState.name=''


    //搜索列表
    emit("select_list")

  }).catch((err) => {
    console.log(err)
  })
};


const handleCancel = (e: MouseEvent) => {
  emit("close-model", false);
};

interface FormState {
  url: string;
  name: string;
  url_http: string
}

const formState = reactive<FormState>({
  url: '',
  name: '',
  url_http: 'Http://'
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>

