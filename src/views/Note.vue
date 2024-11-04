<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-11-03 18:08:45
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-04 09:52:04
 * @Description:
-->
<!-- src/views/NoteDetail.vue -->
<template>
  <div id="note">
    <div class="wrapper">
      <div id="SideBar">
        <SideBar />
      </div>
      <div id="main">
        <Note />
      </div>
    </div>
  </div>
</template>
<script>
import data from '../assets/data.json'
import SideBar from '../components/SideBar'
import Note from '../components/Note'
export default {
  components: {
    SideBar,
    Note
  },
  data () {
    return {
      note: data.filter(note => note.id === this.$route.params.id)[0]
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
<style scoped>
#note {
  min-height: 200vh;
  background-color: #fff;
}

.wrapper {
  display: flex;
  width: 95%;
  max-width: 116em;
  margin: auto;
  padding-top: 1.5em;
}

.content {
  /* 允许长单词或 URL 地址换行到下一行 */
  word-wrap: break-word;
  /* 强制文本在任何字符处换行 */
  word-break: break-all;
  /* 允许文本在必要时换行 */
  white-space: normal;
  /* 处理长单词和 URL */
  overflow-wrap: break-word;
}
</style>
