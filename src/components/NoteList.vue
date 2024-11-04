<template>
  <div id="notes">
    <NoteCard
      v-for="(note, index) in notes"
      :key="index"
      :title="note.title"
      :summary="note.content.slice(0, 100)"
      :date="note.date"
      :tags="note.tags"
      :link="{ name: 'Note', params: { id: note.id } }"
    />
  </div>
</template>
<script>
import NoteCard from './NoteCard'
import data from '../assets/data.json'
export default {
  components: {
    NoteCard
  },
  data () {
    return {
      notes: data
    }
  }
}
</script>
<style scoped>
#notes {
  margin: 1em 1em;
}
</style>
