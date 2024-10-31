<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 12:31:51
 * @LastEditors: Caldm 1832400547@qq.com
 * @LastEditTime: 2024-10-31 19:40:15
 * @FilePath: \期末作业\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="home">
    <banner />
    <div class="wrapper">
    </div>
  </div>
</template>
<script>
import banner from '../components/Banner'
export default {
  components: {
    banner
  }
}
</script>
<style>
  body {
    background: #fff url('../assets/background.jpg') no-repeat fixed center;
    background-size: cover;
  }
</style>
