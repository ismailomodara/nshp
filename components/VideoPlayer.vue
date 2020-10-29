<template>
  <el-dialog
    title=""
    :visible.sync="shouldShow"
    :close-on-click-modal="false"
    width="80%"
    center
    @close="closeEvent"
  >
    <iframe
      ref="iframe"
      width="420"
      height="315"
      :src="`${url}?${iframeAttr}`"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </el-dialog>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    show: Boolean,
    url: {
      type: String,
      default: 'https://youtube.com/embed/3V-vjN_lZUA',
    },
  },
  data() {
    return {
      iframeAttr: '',
    }
  },
  computed: {
    shouldShow: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit('update:show', value)
      },
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
      this.shouldShow = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
