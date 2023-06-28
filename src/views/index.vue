<template>
  index
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'HomeView',
  setup() {
    let c: {
      name: string,
      gender?: number
    }
    c = {
      name: "bigzheng",
    }
    console.log('c', c)

    return{
    }
  }
});
</script>


<style lang="scss" scoped>
.container{
  height: 3000px;
}
</style>

