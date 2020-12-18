<template>
  <div class="video-cta">
    <el-dropdown @command="command">
      <el-button plain>
        Learn more <i class="el-icon-video-play"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="english">English</el-dropdown-item>
        <el-dropdown-item command="pidgin">Pidgin</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <nuxt-link to="/interests">
      <el-button type="primary"
        >Express Interest <i class="el-icon-document"></i
      ></el-button>
    </nuxt-link>
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
    command(command) {
      this.playVideo(command)
    },
  },
}
</script>

<style lang="scss">
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

.el-dropdown-menu {
  min-width: 180px !important;
}
</style>
