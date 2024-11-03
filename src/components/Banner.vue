<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 16:54:53
 * @LastEditors: Caldm 1832400547@qq.com
 * @LastEditTime: 2024-10-31 23:22:25
 * @FilePath: \期末作业\src\components\Banner.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="banner">
    <h1>{{ title }}</h1>
    <img
      :src="bannerImg"
      alt="banner"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Caldm',
      bannerImg: require('../assets/banner.png')
    }
  }
}
</script>
<style scoped>
#banner {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#banner > h1 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(33, 255, 63, 0.95);
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  font-size: 6em;
  font-style: italic;
}
#banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 1px solid #aaa;
}
</style>
