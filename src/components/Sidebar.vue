<template>
  <div id="sidebar">
    <div id="header">
      <div id="header-image">
        <router-link to="/">
          <img
            :src="avatarSrc"
            alt="头像"
          >
        </router-link>
      </div>
      <div id="info">
        <h1><router-link to="/">{{ userName }}</router-link></h1>
        <h2>{{ summary }}</h2>
        <div class="connect">
          <button
            @click.prevent
            id="weChat"
          >
            <svg
              t="1730528211802"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6090"
            >
              <path
                d="M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528C163.2 94.912 0 230.656 0 403.136c0 99.52 54.272 181.248 145.024 244.736L108.8 756.864l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.04-24.256-11.2-49.6-11.2-76.032C385.088 475.776 521.024 347.264 693.12 347.264zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312C443.968 266.944 471.168 249.024 498.304 249.024zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248S289.92 266.944 289.92 294.272C289.92 321.408 271.872 339.584 244.672 339.584zM1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.728 783.872 1024 711.488 1024 629.76zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224C661.504 566.464 643.648 584.384 616.128 584.384zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224C860.864 566.464 842.752 584.384 815.488 584.384z"
                fill="#272636"
                p-id="6091"
              ></path>
            </svg>
            <div class="code">
              <img
                :src="weChatCode"
                alt="二维码"
              >
            </div>
          </button>
          <button
            @click="copyQQId"
            id="QQ"
          >
            <svg
              t="1730528185513"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5063"
            >
              <path
                d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                p-id="5064"
              ></path>
            </svg>
          </button>
          <button
            @click="copyEmail"
            id="emali"
          >
            <svg
              t="1730528231777"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7131"
            >
              <path
                d="M1022.08 716.928V300.48l-217.28 217.344 217.28 199.04M655.36 667.2a188.16 188.16 0 0 1-133.888 55.488c-50.56 0-98.176-19.712-133.952-55.488L270.976 550.592 20.864 779.84v38.4c0 50.24 40.832 91.072 91.008 91.072h819.2c50.176 0 91.008-40.832 91.008-91.008v-39.68l-249.536-228.608-117.12 117.12"
                fill="#000000"
                p-id="7132"
              ></path>
              <path
                d="M932.928 128h-819.2C63.616 128 22.848 168.832 22.848 219.008v19.008l398.784 398.912c27.2 27.136 63.36 42.112 101.76 42.112 38.464 0 74.624-14.976 101.76-42.112L1024 238.016v-19.008C1024 168.832 983.04 128 932.928 128M20.864 300.48v417.6L238.72 518.4 20.864 300.48"
                fill="#000000"
                p-id="7133"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="card announcement">
      <div class="card-header">
        <div class="card-icon">
          <svg
            t="1730530530681"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8153"
          >
            <path
              d="M913.926534 306.929438c-34.841529-63.1032-84.71031-116.042923-144.194076-153.084561-6.061043-3.857864-11.45489-6.427386-18.08489-6.427386-16.757662 0-30.391171 14.431687-30.391171 32.1707 0 12.040221 6.257517 22.553669 17.10047 28.801976 104.863303 64.952314 170.005952 185.193863 170.005952 313.797869 0 128.48428-65.080228 248.671593-169.782871 313.62186-8.66638 5.050016-17.927301 15.391549-17.927301 29.275767 0 17.739013 13.658068 32.1707 30.446429 32.1707 7.073092 0 12.658298-3.054569 17.785062-6.192026 59.742662-37.002752 109.819175-89.979314 144.816247-153.200194 36.057217-65.137533 55.116295-139.717112 55.116295-215.678154C968.816678 446.399933 949.836395 371.963617 913.926534 306.929438zM803.242665 522.18906c0-44.717458-11.232832-88.62241-32.481785-126.96774-20.623713-37.2156-50.127677-68.388577-85.322248-90.149183l-0.10847-0.064468c-1.02433-0.564865-10.200316-5.520737-17.015535-5.520737-16.879436 0-30.611182 14.480806-30.611182 32.279171 0 11.665691 5.8001 22.472827 15.155165 28.212552 54.896284 33.086559 89.00001 95.240131 89.00001 162.208359 0 68.366064-35.157731 131.180691-91.75475 163.933653l-0.100284 0.061398c-9.143241 5.863545-14.601556 16.182564-14.601556 27.602661 0 17.830087 13.707187 32.336476 30.531364 32.336476l0.162706 0.001023c0.001023 0 0.001023 0 0.001023 0 7.096628 0 15.121396-4.170996 15.459087-4.348028l0.11461-0.064468C756.659721 697.290053 803.242665 613.174284 803.242665 522.18906zM550.366308 75.543533c-4.938476-2.527566-10.45205-3.864004-15.941064-3.864004-8.256034 0-16.358573 2.992147-22.808472 8.42181l-0.145309 0.121773c-5.265934 4.438079-52.949956 44.529169-104.874559 85.10326-93.812619 73.362868-122.260531 86.464257-127.851876 88.575338L159.5933 253.901711c-0.782829 0-1.485841 0.053212-2.139733 0.110517l-60.977793 0c-16.788361 0-30.445406 14.419408-30.445406 32.144094l0 472.503451c0 17.70729 13.658068 32.113395 30.445406 32.113395l204.416669 0.059352c5.431709 2.260483 32.210609 15.781428 115.359354 87.7526 28.380374 24.549116 61.175291 54.086849 92.342128 83.173304 0.826831 0.771573 1.36509 1.27197 1.592264 1.479701l0 0.001023c6.668886 6.316869 15.270798 9.795087 24.221658 9.795087 5.106298 0 10.298554-1.183965 15.020088-3.428076 13.477966-6.433526 22.533202-20.562315 22.533202-35.150568 0.00307-1.576915 0.291642-157.672042 0.291642-160.783917 0-3.175319-1.301645-656.819317-1.314948-663.416572C570.936809 95.360881 563.055305 82.060971 550.366308 75.543533zM510.864642 768.479419l-0.466628 102.921068c-15.527648-13.923104-30.552853-27.123754-44.726667-39.289841-113.78244-97.821933-142.303007-106.007359-161.762197-106.007359-0.385786 0-0.703011 0.048095-0.935302 0.083911-0.060375 0.00921-0.12075 0.021489-0.13917 0.025583-0.063445-0.005117-0.12382-0.017396-0.184195-0.025583-0.231267-0.035816-0.548492-0.083911-0.934279-0.083911L148.03301 726.103286c-17.677615 0-21.494547-4.28356-21.494547-24.121374L126.538463 339.353918c0-13.921058 1.487887-20.479427 15.084557-20.479427l138.452305 0c18.941398 0 47.839565-8.090259 172.184571-104.774275 18.978237-14.756075 38.977733-30.639834 58.115606-46.155203C510.425643 227.891314 510.864642 766.102279 510.864642 768.479419z"
              fill="#272636"
              p-id="8154"
            ></path>
          </svg>
        </div>
        <div class="card-title">
          <span>公告</span>
        </div>
      </div>
      <div class="card-content">
        <p>{{ announcement }}</p>
      </div>
    </div>
    <div class="card categories">
      <div class="card-header">
        <div class="card-icon">
          <svg
            t="1731208182693"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5349"
          >
            <path
              d="M164.3 206.4c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM353.2 300.4h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40zM164.3 459.2c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM878.2 473.2h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40zM164.3 712c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM878.2 726h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40z"
              fill=""
              p-id="5350"
            ></path>
          </svg>
        </div>
        <div class="card-title">
          <span><router-link
              :to="{name: 'Categories', params: {cate: 'all'}}">分类</router-link></span>
        </div>
      </div>
      <div class="card-content">
        <ul>
          <li
            v-for="(item, index) in categories.filter((value, index, self) => self.indexOf(value) === index)"
            :key="index"
          >
            <router-link :to="{name: 'Categories', params: {cate: item}}">
              {{ item }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="card tags">
      <div class="card-header">
        <div class="card-icon">
          <svg
            t="1731208140698"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4293"
          >
            <path
              d="M960.616994 0.010005H519.790222c-9.825277 0-20.481001 4.642494-27.854961 12.016455L10.676772 494.095383l-1.090586 0.550296c-15.018066 15.018066-15.018066 39.331125 0 54.079046l439.736187 439.736187 0.550295 0.82044c14.747921 15.018066 39.331125 15.018066 54.349192 0l482.609214-482.619219c7.654111-7.644106 12.016454-17.209243 12.016454-27.854961V38.52069c0-21.311447-16.929093-38.510684-38.230534-38.510685z m-38.78083 462.948654L477.177334 907.61749l-386.207436-385.65714L536.179024 76.761229h385.65714v386.19743zM756.867558 357.532034c63.093888 0 114.981758-51.897875 114.981758-115.261908 0-63.364033-51.897875-115.261908-114.981758-115.261909-63.364033 0-115.271914 51.347579-115.271913 115.261909 0 63.374039 51.90788 115.261908 115.271913 115.261908z m0-184.088876a68.716908 68.716908 0 0 1 68.826968 68.826968c0 37.960389-31.136724 69.377263-68.826968 69.377263-38.240539 0-69.377263-31.416874-69.377263-69.377263 0-38.230534 31.136724-68.826968 69.377263-68.826968z"
              fill="#717071"
              p-id="4294"
            ></path>
          </svg>
        </div>
        <div class="card-title">
          <span><router-link
              :to="{name: 'Categories', params: {cate: 'all'}}">标签</router-link></span>
        </div>
      </div>
      <div class="card-content">
        <ul>
          <li
            v-for="(item, index) in tags"
            :key="index"
          >
            <router-link :to="{name: 'Categories', params: {cate: item}}">
              {{ item }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json'
export default {
  data () {
    return {
      avatarSrc: require('../assets/logo.png'),
      weChatCode: require('../assets/weChatCode.png'),
      userName: 'Caldm',
      summary: '这里是我的个人博客，欢迎来到我的小站，希望你喜欢。',
      announcement: '欢迎来访 Caldm 的个人博客，博主暂时还没有发布任何公告。',
      qqId: '1832400547',
      email: '1832400547@qq.com',
      categories: data.map(e => e.category),
      tags: Array.from(new Set(data.flatMap(item => item.tags)))
    }
  },
  methods: {
    copyQQId () {
      try {
        navigator.clipboard.writeText(this.qqId)
        alert('QQ号已复制到剪贴板！')
      } catch (e) {
        console.error('复制到剪贴板失败:', e)
        alert(`复制到剪贴板失败，请手动复制 ${this.qqId}`)
      }
    },
    copyEmail () {
      try {
        navigator.clipboard.writeText(this.email)
        alert('邮箱地址已复制到剪贴板！')
      } catch (e) {
        console.error('复制到剪贴板失败:', e)
        alert(`复制到剪贴板失败，请手动复制 ${this.email}`)
      }
    }
  }
}
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  /* 清除文本样式 */
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 1em;
}

a {
  color: black;
  text-decoration: none;
}
.card {
  margin: 1em 0;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #eceef0;
  border-radius: 15px;
  box-shadow: 0 0 5px #cbcbcb;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.card ul {
  list-style-type: none;
}

.card li {
  margin: 0.4em 0;
  margin-left: 0.8em;
  padding: 0.2em 0;
  padding-left: 0.4em;
}

.card li:hover {
  background-color: #f5f5f5;
}

#header:hover,
.card:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.card-icon {
  height: 24px;
  width: 24px;
  flex: 0 0 auto;
  margin: 0.6em 0.4em;
  margin-left: 1em;
  padding: 0;
  overflow: hidden;
}

.card-icon svg {
  object-fit: cover;
}

.card-title {
  flex: 1 1 auto;
  margin: 0 0.5em;
  margin-left: 0;
  font-size: 1.2em;
}

.card-content {
  padding: 0.5em;
  margin-bottom: 0.5em;
}

.card-content p {
  text-indent: 2em;
}

#sidebar {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-items: center;
}

#header {
  margin: 1em 0;
  padding: 5px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #eceef0;
  box-shadow: 0 0 5px #cbcbcb;
  border-radius: 15px;
  text-align: center;
  transition: box-shadow 0.3s;
}

#header-image {
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  max-width: 100px;
  border: 5px solid #eaeaea;
  border-radius: 50%;
  overflow: hidden;
}

#header-image img {
  object-fit: cover;
  width: 100%;
}

#info h1 {
  margin: 1em 3em 0.5em;
  padding-bottom: 0.5em;
  font-size: 1.3em;
  border-bottom: 1px solid black;
}

#info h2 {
  display: block;
  margin: auto 1.8em 1.2em;
  font-size: 0.8em;
  font-weight: normal;
  line-height: 1.5em;
}

.connect {
  display: flex;
  flex: 1 1 auto;
  justify-content: space-around;
}

#weChat .code {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  padding: 0;
  overflow: hidden;
  transition: width, height, opacity 0.3s ease;
}

#weChat .code img {
  width: 100%;
  object-fit: cover;
}

#weChat::before {
  content: "";
  position: absolute;
  left: -75px;
  height: 0;
  width: 0;
}

.connect #weChat:hover .code {
  width: 150px;
  height: 150px;
  opacity: 1;
  margin-top: 8px;
  padding: 8px;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  background-color: #eaeaea;
}

.connect button {
  border: none;
  background-color: transparent;
}

.connect button:hover {
  background-color: #f5f5f5;
}

.connect .icon {
  width: 80%;
  padding: 0.4em 1em;
}
</style>
