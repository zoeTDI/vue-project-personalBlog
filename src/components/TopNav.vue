<!--
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 15:47:53
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-03 19:01:48
 * @FilePath: \期末作业\src\components\TopNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav">
    <div class="nav-list">
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="item.classList"
        >
          <router-link :to="item.path">
            <img
              v-if="index === isLogo"
              :src="logoImage"
              alt="logo"
            />
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  data () {
    return {
      navList: [
        { name: '', path: '/', classList: ['logo'] },
        { name: 'Caldm', path: '/', classList: ['title'] },
        { name: '主页', path: '/', classList: [] },
        { name: '分类', path: '/categories', classList: [] },
        { name: '归档', path: '/archivist', classList: [] },
        { name: '联系我', path: '/connect', classList: [] }
      ],
      isLogo: 0,
      isTitle: 1,
      logoImage: require('@/assets/logo.png')
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.nav {
  position: absolute;
  width: 100%;
  height: 6px;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: height 0.5s ease;
}

.nav:hover {
  height: 64px;
}

.nav-list {
  width: 95%;
  max-width: 116em;
  margin: auto;
}

.nav-list ul {
  list-style-type: none;
  margin: auto 0;
  width: 100%;
  display: flex;
  flex: 0 1 60px;
}

.nav-list li {
  display: flex;
  text-align: center;
}

.nav-list a {
  margin: auto;
  display: block;
  padding: 0.5em 0.8em;
}

.logo {
  flex-basis: 50px;
  margin: auto 1em;
}

.logo a {
  width: 50px;
  height: 50px;
  margin: 0.4em 0;
  padding: 0;
  border: 3px solid rgb(0, 118, 16);
  border-radius: 50%;
  overflow: hidden;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  flex-grow: 1;
}

.title a {
  margin-left: 1em;
  text-align: left;
  font-size: 1.5em;
}
</style>
