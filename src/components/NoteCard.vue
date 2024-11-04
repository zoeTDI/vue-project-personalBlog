<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-11-03 17:01:57
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-03 17:52:22
 * @Description:
-->
<template>
  <div class="note-card">
    <div class="header">
      <div class="title">
        <h1>
          <router-link :to="link">
            {{ title }}
          </router-link>
        </h1>
      </div>
    </div>
    <div class="body">
      <div class="summary">
        <router-link :to="link">
          {{ summary }}
        </router-link>
      </div>
    </div>
    <div class="foot">
      <div id="date">
        <p>{{ date.year }} - {{ date.month }} - {{ date.day }}</p>
      </div>
      <div id="tags">
        <p>{{ tags.join(' ') }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    summary: String,
    date: {
      year: Number,
      month: Number,
      day: Number
    },
    tags: Array,
    link: Object // 路由对象
  }
}
</script>
<style scoped>
.note-card {
  width: 95%;
  margin: 2.5em auto;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #eceef0;
  border-radius: 15px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: box-shadow .5s;
}

.note-card:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
}

.header {
  width: 100%;
  min-height: 3em;
  padding: 0 .5em;
  padding-top: .25em;
  padding-bottom: .5em;
  background-color: #F5F5F5;
}

.header h1 a,
.body .summary {
  /* 允许长单词或 URL 地址换行到下一行 */
  word-wrap: break-word;
  /* 强制文本在任何字符处换行 */
  word-break: break-all;
  /* 允许文本在必要时换行 */
  white-space: normal;
  /* 处理长单词和 URL */
  overflow-wrap: break-word;
}

.header h1 a {
  margin-left: .725em;
  font-size: 1.5em;
  color: #253d27;
}

.summary {
  padding: 0.8em 1.8em 0.8em;
  text-indent: 2em;
}

.summary a {
  font-size: 1.2em;
  color: black;
}

.foot {
  display: flex;
  margin: .5em 1em;
}

.foot #date {
  flex: 0 0 auto;
  margin-right: 1em;
}

.foot #tags {
  flex: 1 1 auto;
}

.foot #tags p {
  font-style: italic;
  text-decoration: underline;
}
</style>
