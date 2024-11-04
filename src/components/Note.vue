<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-11-03 18:44:43
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-03 18:46:55
 * @Description:
-->
<template>
  <div class="note">
    <h1>施工中...</h1>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    content: String,
    date: {
      year: Number,
      month: Number,
      day: Number
    },
    tags: Array
  }
}
</script>
<style scoped>
h1 {
  font-size: 4em;
}
</style>
