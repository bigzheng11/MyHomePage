<template>

  <div class="container">
    <div>
      <a-radio-group v-model:value="value_select" style="margin-bottom: 10px">
        <a-radio :value="1">必应</a-radio>
        <a-radio :value="2">百度</a-radio>
        <a-radio :value="3">知乎</a-radio>
        <a-radio :value="4">bilibili</a-radio>
      </a-radio-group>
    </div>
    <a-input-search v-model:value="value_input" placeholder="请输入" enter-button
                    @search="onSearch" style="width: 100%"
    />

    <div class="toPage">
      <a-card hoverable style="width: 180px;padding-top: 10px" @click="toSelect(1)" class="Card">
        <template #cover>
          <img alt="example" src="@/assets/select_img/bing.png"/>
        </template>
        <a-card-meta title="必应" style="position: absolute;bottom: 18px">
          <template #description>www.Bing.com</template>
        </a-card-meta>
      </a-card>

      <a-card hoverable style="width: 180px;padding-top: 10px" @click="toSelect(2)" class="Card">
        <template #cover>
          <img alt="example" src="@/assets/select_img/img.png"/>
        </template>
        <a-card-meta title="百度" style="position: absolute;bottom: 18px">
          <template #description>www.Bing.com</template>
        </a-card-meta>
      </a-card>

      <a-card hoverable style="width: 180px;padding-top: 10px" @click="toSelect(3)" class="Card">
        <template #cover>
          <img alt="example" src="@/assets/select_img/img_4.png"/>
        </template>
        <a-card-meta title="知乎" style="position: absolute;bottom: 18px">
          <template #description>www.Bing.com</template>
        </a-card-meta>
      </a-card>

      <a-card hoverable style="width: 180px;padding-top: 10px" @click="toSelect(4)" class="Card">
        <template #cover>
          <img alt="example" src="@/assets/select_img/img_3.png"/>
        </template>
        <a-card-meta title="bilibili" style="position: absolute;bottom: 18px">
          <template #description>www.Bing.com</template>
        </a-card-meta>
      </a-card>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup() {
    const value_input = ref<string>('')
    const value_select = ref<number>(1)
    const url = reactive<string[]>(
        [
          'https://www.bing.com',
          'https://www.baidu.com',
          'https://www.zhihu.com',
          'https://www.bilibili.com'
        ]
    )
    const onSearch = (args: string) => {
      if (value_select.value === 1) {
        window.open('https://www.bing.com/search?q=' + args)
      }
      if (value_select.value === 2) {
        window.open('https://www.baidu.com/s?wd=' + args)
      }
      if (value_select.value === 3) {
        window.open('https://www.zhihu.com/search?type=content&q=' + args)
      }
      if (value_select.value === 4) {
        window.open('https://search.bilibili.com/all?keyword=' + args)
      }
    }
    const toSelect = (args: number) => {
      window.open(url[args - 1])
    }
    return {value_input, value_select, onSearch, toSelect}
  }
});
</script>
<style lang="scss" scoped>
.container {
  width: 50%;
  height: 70%;
  margin: 0 auto;
  margin-top: 10%;
}

.toPage {
  margin-top: 10px;
  display: flex;
  //justify-content: space-between;
  //width: 115%;
  .Card{
    margin-right: 10px;
  }
}
</style>

