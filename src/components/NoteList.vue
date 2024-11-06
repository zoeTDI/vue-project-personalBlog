<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-11-03 16:57:47
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-05 13:06:09
 * @Description:
-->
<template>
  <div id="notes">
    <NoteCard
      v-for="(note, index) in noteList"
      :key="index"
      :title="note.title"
      :summary="note.content.slice(0, 98) + '……'"
      :date="note.date"
      :tags="note.tags"
      :link="{ name: 'Note', params: { id: note.id } }"
    />
  </div>
</template>
<script>
import NoteCard from './NoteCard'
export default {
  props: {
    noteList: Array
  },
  components: {
    NoteCard
  }
}
</script>
<style scoped>
#notes {
  margin: 1em;
}
</style>
