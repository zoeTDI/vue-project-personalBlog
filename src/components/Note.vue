<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-11-03 18:44:43
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-05 10:30:00
 * @Description:
-->
<template>
  <div class="note">
    <div class="header">
      <h1>{{ title }}</h1>
      <h2>{{ author }}</h2>
    </div>
    <div class="body">
      <p
        v-for="(item, index) in content"
        :key="index"
      >{{ item }}</p>
      <img
        src="../assets/logo.png"
        alt=""
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    content: Array,
    date: {
      year: Number,
      month: Number,
      day: Number
    },
    author: String,
    tags: Array
  }
}
</script>
<style scoped>
/* .note {
  outline: 1px solid #aaa;
} */

.note {
  width: 95%;
  margin: .5em auto;
  margin-top: 1em;
  padding: 2em 4.5em;
  padding-top: 3.5em;
  border: 1px solid #eceef0;
  border-radius: 15px;
  box-shadow: 0 0 5px #cbcbcb;
}

.body * {
  border-left: 5px solid rgba(255, 255, 255, 0);
}

.body *:hover {
  border-left: 5px solid rgba(57, 57, 255, 0.8);
  background: #F5F5F5;
}

.note .header h1 {
  text-align: center;
  font-size: 2em;
}

.note .header h2 {
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  color: #aaa;
  margin: 0;
  padding: 0;
  margin-top: .5em;
  margin-bottom: 1em;
}

.note p {
  text-indent: 2em;
  line-height: 2em;
  padding: 0 .5em;
}

.body img {
  display: block;
  width: 100%;
  padding: 1em 10%;
}
</style>
