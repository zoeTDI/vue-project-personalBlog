<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 12:31:51
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-03 16:56:30
 * @FilePath: \期末作业\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="home">
    <banner />
    <div class="wrapper">
      <div id="sidebar">
        <sidebar />
      </div>
      <div id="main">
        <div class="list">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from '../components/Banner'
import sidebar from '../components/Sidebar'
export default {
  components: {
    banner,
    sidebar
  }
}
</script>
<style scoped>
#home {
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

#sidebar {
  flex: 0 0 20%;
}

#main {
  flex: 1 auto;
}
</style>
