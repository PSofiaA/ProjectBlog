<!-- Разметка - шаблон - структура нашего компонента -->
<template>
  <div class="app">
    <submit-btn @click="showDialog">Create Post</submit-btn>

    <dialog-box v-model:show="dialogVisible">
      <post-form @create="createPost"></post-form>
    </dialog-box>

    <post-list
      :posts="posts"
      @remove="removePost"
    ></post-list>
  </div>
</template>

<!-- Описываем логику компонента, функции, -->
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorVal: "",
    };
  },

  mounted() {
    this.fetchPosts();
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter(
        (p) => p.id !== post.id
      );
    },

    showDialog() {
      this.dialogVisible = true;
    },

    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        console.log("resp", response);
      } catch (error) {
        alert("error");
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: poppins;
}
</style>
