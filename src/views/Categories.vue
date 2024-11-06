<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 12:37:13
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-06 07:58:55
 * @Description: 
-->
<template>
  <div id="categories">
    <div class="wrapper">
      <div id="left-side-bar">
        <SideBar />
      </div>
      <div id="main">
        <NoteList :noteList="notes"/>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '../components/SideBar'
import NoteList from '../components/NoteList.vue'
import data from '../assets/data.json'
export default {
  components: {
    SideBar,
    NoteList
  },
  data () {
    return {
      notes: data.filter(e => e.category === (this.$route.params.cate === 'all' ? e.category : this.$route.params.cate))
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  width: 95%;
  max-width: 116em;
  margin: auto;
  padding-top: 1.5em;
}

#main {
  flex: 1 1 60%;
  margin: 1em;
  margin-top: 0;
  max-width: 76em;
  min-width: 34em;
}
</style>
