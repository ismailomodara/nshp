<template>
  <el-dialog title="" :visible.sync="shouldShow" width="80%" center>
    <iframe
      width="420"
      height="315"
      src="https://www.youtube.com/embed/aSJaZ2EaIsk"
    >
    </iframe>
  </el-dialog>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    show: Boolean,
  },
  data() {
    return {}
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
}
</script>

<style lang="scss" scoped></style>
