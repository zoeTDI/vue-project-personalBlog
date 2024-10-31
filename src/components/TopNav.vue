<template>
  <div class="nav">
    <div class="nav-list">
      <ul>
        <li class="logo">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="logo" />
          </router-link>
        </li>
        <li class="title">
          <router-link to="/">Caldm</router-link>
        </li>
        <li>
          <router-link to="/">主页</router-link>
        </li>
        <li>
          <router-link to="/categories">分类</router-link>
        </li>
        <li>
          <router-link to="/archivist">归档</router-link>
        </li>
        <li>
          <router-link to="/connect">联系我</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
/* * {
  outline: 1px solid #aaa;
} */
a {
  text-decoration: none;
}
.nav {
  position: absolute;
  width: 100%;
  height: 6px;
  overflow: hidden;
  transition: height 0.5s ease;
}
.nav:hover {
  height: 64px;
}
.nav-list {
  width: 95%;
  max-width: 88em;
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
  text-align: center;
}
.nav-list a {
  display: block;
  width: 80px;
  line-height: 64px;
}
.logo {
  flex-basis: 50px;
  margin: auto 1em;
}
.logo a {
  width: 50px;
  height: 50px;
  margin: .4em 0;
}
.logo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
.title {
  flex-grow: 1;
}
.title a {
  margin-left: 1em;
  text-align: left;
}
</style>
