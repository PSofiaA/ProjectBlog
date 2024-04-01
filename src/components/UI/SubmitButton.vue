<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "submit-btn",
};
</script>

<style scoped>
button {
  padding: 5px 15px;
  align-self: flex-end;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
