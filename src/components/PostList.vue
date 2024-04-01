<template>
  <div v-if="posts.length > 0" class="post-list">
    <h3 class="blog-heading">Posts:</h3>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    ></post-item>
  </div>
  <h3 v-else>No posts yet</h3>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* .post-list {
  margin: 50px;

} */

/* .blog-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f33c3c;
  font-size: 2rem;
} */
</style>
