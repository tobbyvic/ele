<template>

  <transition name="profile-detail">
    <div class="profile-detail" v-if="profileDetailFlag">

      <!--EntryHeader-->
      <entry-header>
        <template slot="icon">
          <a @click="BACKTO_PROFILE"><i class="el-icon-arrow-left"></i></a>
        </template>
        <template slot="content">
          账户信息
        </template>
      </entry-header>


    </div>
  </transition>


</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'

  export default {
    name: "profile-detail",
    components: {
      EntryHeader
    },
    data() {
      return {}
    },
    computed: {
      profileDetailFlag() {
        return this.$store.state.profileDetailFlag
      }
    },
    mounted() {
    },
    methods: {
      BACKTO_PROFILE() {
        this.$store.commit("MAKETRUE_PROFILE_DETAIL", false);
      }
    }
  }
</script>

<style>
  /**
  整个页面
   */
  .profile-detail {
    /*position: relative;*/
    position: absolute;
    top: 0;
    z-index: 4;
    height: 100vh;
    width: 100%;
    /*width: 100vw;*/
    /*width: 100%;*/
    background: #ebebeb;
    color: #000;
  }

  /*transition过渡效果*/
  .profile-detail-enter-active, .profile-detail-leave-active {
    transition: all .3s;
    transform: translateX(0);
  }

  .profile-detail-enter, .profile-detail-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }








</style>
