<template>
  <div class="video-cta">
    <el-button type="primary" @click="playVideo('english')"
      >Learn more <i class="el-icon-video-play"></i
    ></el-button>
    <el-button plain @click="playVideo('pidgin')"
      >See Tori <i class="el-icon-video-play"></i
    ></el-button>
  </div>
</template>

<script>
export default {
  name: 'VideoCta',
  data() {
    return {}
  },
  methods: {
    playVideo(lang) {
      this.$store.dispatch('VIDEO', { play: true, lang })
    },
  },
}
</script>

<style lang="scss" scoped>
.video-cta {
  span {
    display: flex;
    align-items: center;
  }
  margin-left: 10px;

  i {
    font-weight: 600;
    font-size: 1.2rem;
    animation: pulsate 2s ease-in infinite;
    margin-left: 7px;
  }
}
</style>
