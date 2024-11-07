<template>
  <div class="archivist">
    <div class="wrapper">
      <div class="left-side-bar">
        <SideBar />
      </div>
      <div id="main">
        <NoteList :noteList="notes" />
      </div>
    </div>
  </div>
</template>
<script>
import data from '../assets/data.json'
import SideBar from '../components/SideBar.vue'
import NoteList from '../components/NoteList.vue'
export default {
  components: {
    SideBar,
    NoteList
  },
  data () {
    return {
      notes: data.sort((a, b) => {
        return parseInt(b.date, 10) - parseInt(a.date, 10)
      })
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
