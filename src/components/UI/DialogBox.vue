<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog-content" @click.stop>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog-box",

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog-content {
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
}
</style>
