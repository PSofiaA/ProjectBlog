<template>
  <div class="post">
    <div>
      <div>Название: {{ post.title }}</div>
      <div>Описание: {{ post.body }}</div>
    </div>
    <div class="post-btns">
      <submit-btn @click="$emit('remove', post)"
        >Delete</submit-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  margin-top: 14px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  /* flex-direction: column; */
}
</style>
