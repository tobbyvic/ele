<template>
  <section class="bottom-nav">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="position:absolute;width:0;height:0">
      <defs>
        <!--entry两个svg-->
        <symbol viewBox="0 0 40 40" id="entry">
          <g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="2">
            <path
              d="M31.426 23.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
            <path
              d="M29.074 31.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C33.202 2.416 21.869-1.62 12.294 2.844 2.718 7.309-1.474 18.586 2.93 28.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
          </g>
        </symbol>

        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" id="entryActive">
          <defs>
            <linearGradient id="index.18edf5a_c" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#2BAEFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
            <linearGradient id="index.18edf5a_d" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#29ADFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
            <path id="index.18edf5a_a"
                  d="M30.426 22.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
            <mask id="index.18edf5a_e" width="9.455" height="10.456" x="-1" y="-1">
              <path fill="#fff" d="M29.426 18.382h9.455v10.456h-9.455z"></path>
              <use xlink:href="#index.18edf5a_a"></use>
            </mask>
            <path id="index.18edf5a_b"
                  d="M28.074 30.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C32.202 1.416 20.869-2.62 11.294 1.844 1.718 6.309-2.474 17.586 1.93 27.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
            <mask id="index.18edf5a_f" width="38.769" height="39.241" x="-.7" y="-.7">
              <path fill="#fff" d="M-.521-.675h38.769v39.241H-.521z"></path>
              <use xlink:href="#index.18edf5a_b"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)">
              <use fill="url(#index.18edf5a_c)" xlink:href="#index.18edf5a_a"></use>
              <use stroke="url(#index.18edf5a_d)" stroke-width="2" mask="url(#index.18edf5a_e)"
                   xlink:href="#index.18edf5a_a"></use>
            </g>
            <g transform="translate(1 1)">
              <use fill="url(#index.18edf5a_c)" xlink:href="#index.18edf5a_b"></use>
              <use stroke="url(#index.18edf5a_d)" stroke-width="1.4" mask="url(#index.18edf5a_f)"
                   xlink:href="#index.18edf5a_b"></use>
            </g>
          </g>
        </symbol>

        <!--find两个svg-->
        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" id="find">
          <defs>
            <path id="discover-regular.8ef537f_a"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>
            <mask id="discover-regular.8ef537f_b" width="40" height="40" x="0" y="0" fill="#fff">
              <use xlink:href="#discover-regular.8ef537f_a"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use stroke="#666" stroke-width="4" mask="url(#discover-regular.8ef537f_b)"
                 xlink:href="#discover-regular.8ef537f_a"></use>
            <path stroke="#666" stroke-width="2"
                  d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path>
            <path fill="#666"
                  d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"></path>
          </g>
        </symbol>

        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" id="findActive">
          <defs>
            <path id="discover-regular.8ef537f_a"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>
            <mask id="discover-regular.8ef537f_b" width="40" height="40" x="0" y="0" fill="#fff">
              <use xlink:href="#discover-regular.8ef537f_a"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use stroke="#3190e8" stroke-width="4" mask="url(#discover-regular.8ef537f_b)"
                 xlink:href="#discover-regular.8ef537f_a"></use>
            <path stroke="#3190e8" stroke-width="2"
                  d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path>
            <path fill="#3190e8"
                  d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"></path>
          </g>
        </symbol>

        <!--order两个svg-->
        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 38" id="order">
          <defs>
            <rect id="order-regular.41c17f8_a" width="38" height="38" rx="2"></rect>
            <mask id="order-regular.41c17f8_b" width="38" height="38" x="0" y="0" fill="#fff">
              <use xlink:href="#order-regular.41c17f8_a"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use stroke="#666" stroke-width="4" mask="url(#order-regular.41c17f8_b)"
                 xlink:href="#order-regular.41c17f8_a"></use>
            <rect width="24" height="2" x="7" y="8" fill="#666" rx="1"></rect>
            <rect width="20" height="2" x="7" y="17" fill="#666" rx="1"></rect>
            <rect width="8" height="2" x="7" y="26" fill="#666" rx="1"></rect>
          </g>
        </symbol>

        <symbol viewBox="0 0 38 38" id="orderActive">
          <defs>
            <linearGradient id="order.070ae2a_a" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#2BAEFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <rect width="38" height="38" fill="url(#order.070ae2a_a)" rx="2"></rect>
            <rect width="24" height="2" x="7" y="8" fill="#FFF" rx="1"></rect>
            <rect width="20" height="2" x="7" y="17" fill="#FFF" rx="1"></rect>
            <rect width="8" height="2" x="7" y="26" fill="#FFF" rx="1"></rect>
          </g>
        </symbol>

        <!--profile两个svg-->
        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 38" id="profile">
          <defs>
            <path id="profile-regular.c151d62_a"
                  d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"></path>
            <mask id="profile-regular.c151d62_c" width="18" height="21" x="0" y="0" fill="#fff">
              <use xlink:href="#profile-regular.c151d62_a"></use>
            </mask>
            <path id="profile-regular.c151d62_b"
                  d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
            <mask id="profile-regular.c151d62_d" width="38" height="16" x="0" y="0" fill="#fff">
              <use xlink:href="#profile-regular.c151d62_b"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="4">
            <use mask="url(#profile-regular.c151d62_c)" xlink:href="#profile-regular.c151d62_a"></use>
            <use mask="url(#profile-regular.c151d62_d)" xlink:href="#profile-regular.c151d62_b"></use>
          </g>
        </symbol>

        <symbol viewBox="0 0 38 38" id="profileActive">
          <defs>
            <linearGradient id="profile.dbc5ebf_a" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#2BAEFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#profile.dbc5ebf_a)" fill-rule="evenodd"
                d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833zM0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
        </symbol>

      </defs>
    </svg>
    <ul>
      <li @click="$router.push({path: '/entry', query: {geohash}})">
        <svg class="bottom-nav--icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('entry') !== -1? '#entryActive' : '#entry'"></use>
        </svg>
        外卖
      </li>
      <li @click="">
        <svg class="bottom-nav--icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('search') !== -1? '#findActive' : '#find'"></use>
        </svg>
        搜索
      </li>
      <li @click="">
        <svg class="bottom-nav--icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('order') !== -1? '#orderActive' : '#order'"></use>
        </svg>
        订单
      </li>
      <li @click="">
        <svg class="bottom-nav--icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('profile') !== -1? '#profileActive' : '#profile'"></use>
        </svg>
        我的
      </li>
    </ul>
  </section>
</template>




<script>
  import {mapState} from 'vuex'
  export default {
    name: "bottom-nav",
    data() {
      return {
        navList: [
          {id: 0, title: "外卖"},
          {id: 1, title: "搜索"},
          {id: 2, title: "订单"},
          {id: 3, title: "我的"}
        ]
      }
    },
    computed: {
      ...mapState([
        'geohash'
      ]),
    },
    created() {
      console.log(this.$route.query);
    }
  }
</script>

<style>
  /**
  bottom-nav style
   */
  .bottom-nav {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    position: fixed;
    flex-direction: column;
    bottom: 0px;
  }

  .bottom-nav ul {
    width: 100%;
    font-size: 0.9rem;
    display: flex;
    flex-wrap: wrap;
  }

  .bottom-nav li {
    width: 25%;
    text-align: center;
    font-size: 0.5rem;
    padding: 5px 0;
    display: inline-flex;
    flex-direction: column;
     -webkit-box-pack: center;
     -ms-flex-pack: center;
     -webkit-justify-content: center;
    justify-content: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     -webkit-align-items: center;
    align-items: center;

    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .bottom-nav--icon {
    width: 1.2rem;
    height: 1.2rem;
  }

  /**
  bottom-nav--icon style
   */



</style>
