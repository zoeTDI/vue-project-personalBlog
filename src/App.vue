<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 12:25:15
 * @LastEditors: Caldm 1832400547@qq.com
 * @LastEditTime: 2024-10-31 17:48:24
 * @FilePath: \期末作业\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <topNav />
    <router-view />
  </div>
</template>

<script>
import topNav from './components/TopNav'
export default {
  name: 'App',
  components: {
    topNav
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 0;
}
</style>
