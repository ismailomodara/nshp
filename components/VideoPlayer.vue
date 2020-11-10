<template>
  <el-dialog
    title=""
    :visible.sync="show"
    :close-on-click-modal="false"
    width="80%"
    center
    @close="closeEvent"
  >
    <iframe
      ref="iframe"
      width="420"
      height="315"
      :src="`${videoLang}?${iframeAttr}`"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </el-dialog>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data() {
    return {
      iframeAttr: '',
    }
  },
  computed: {
    show: {
      get() {
        return this.$store.getters.video.play
      },
      set(value) {
        return this.$emit('update:show', value)
      },
    },
    videoLang() {
      const video = this.$store.getters.video
      return video.lang === 'english'
        ? 'https://youtube.com/embed/3V-vjN_lZUA'
        : 'https://youtube.com/embed/_YDobK1Jq44'
    },
  },
  watch: {
    show() {
      if (this.show) {
        this.iframeAttr = 'autoplay=1&mute=0'
      }
    },
  },
  methods: {
    closeEvent() {
      this.iframeAttr = 'autoplay=0&mute=1'
      this.$store.dispatch('VIDEO', { play: false, lang: 'english' })
    },
  },
}
</script>

<style lang="scss" scoped></style>
