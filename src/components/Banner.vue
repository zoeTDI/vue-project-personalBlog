<template>
  <div id="banner">
    <h1>Caldm</h1>
    <img src="@/assets/banner.png" alt="banner" />
  </div>
</template>
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
