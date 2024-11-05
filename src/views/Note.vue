<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-11-03 18:08:45
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-05 10:26:54
 * @Description:
-->
<!-- src/views/NoteDetail.vue -->
<template>
  <div id="note">
    <div class="wrapper">
      <div id="left-side-bar">
        <SideBar />
      </div>
      <div id="main">
        <Note
          :title="note.title"
          :content="note.content.split('\\n')"
          :author="note.author"
        />
      </div>
      <div id="right-side-bar">

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
  min-height: 100vh;
  background-color: #fff;
}

.wrapper {
  display: flex;
  width: 95%;
  max-width: 116em;
  margin: auto;
  padding-top: 1.5em;
}

#left-side-bar {
  flex: 0 0 20%;
}

#main {
  flex: 1 1 60%;
  margin: auto 1em;
  max-width: 76em;
  min-width: 34em;
}

#right-side-bar {
  flex: 0 0 20%;
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
