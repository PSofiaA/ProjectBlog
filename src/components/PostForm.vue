<template>
  <form @submit.prevent>
    <h4>Create new post</h4>

    <input-box v-model="post.title" type="text" placeholder="Input post name" />

    <input-box
      v-model="post.body"
      type="text"
      placeholder="Input post description"
    />

    <submit-btn @click="createPost">Submit</submit-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
