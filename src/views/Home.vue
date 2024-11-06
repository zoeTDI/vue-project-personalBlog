<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 12:31:51
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-05 12:43:20
 * @Description:
-->
<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 12:31:51
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-04 09:48:42
 * @FilePath: \期末作业\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="home">
    <Banner />
    <div class="wrapper">
      <div id="sidebar">
        <SideBar />
      </div>
      <div id="main">
        <NoteList :noteList="notes" />
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '../components/Banner'
import SideBar from '../components/SideBar'
import NoteList from '../components/NoteList'
import data from '../assets/data.json'
export default {
  components: {
    SideBar,
    Banner,
    NoteList
  },
  data () {
    return {
      notes: data
    }
  }
}
</script>
<style scoped>
#home {
  background-color: #fff;
}

.wrapper {
  display: flex;
  width: 95%;
  max-width: 116em;
  margin: auto;
  padding-top: 1.5em;
}

#sidebar {
  flex: 0 0 20%;
}

#main {
  flex: 1 auto;
  margin: 1em;
  margin-top: 0;
}
</style>
