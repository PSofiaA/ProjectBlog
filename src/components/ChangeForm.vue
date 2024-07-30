<template>
  <div>
    <h4>Edit your post</h4>
    <input-box v-model="post.title" type="text" />

    <input-box v-model="post.body" type="text" />

    <submit-btn @click="editPost">Submit</submit-btn>
  </div>
</template>

<script>
export default {
  methods: {
    editPost() {},
  },
};
</script>

<style scoped></style>
