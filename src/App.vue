<template>
  <div class="app">
    <div class="app-btns">
      <submit-btn @click="showDialog">Create Post</submit-btn>
      <select-box v-model="SelectedSort"></select-box>
    </div>

    <dialog-box v-model:show="dialogVisible">
      <post-form @create="createPost"></post-form>
    </dialog-box>

    <post-list :posts="posts" @remove="removePost"></post-list>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import ModalButton from "./components/ModalButton.vue";
import NavButton from "./components/NavButton.vue";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
    ModalButton,
    NavButton,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorVal: "",
      SelectedSort: "",
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
      this.posts = this.posts.filter((p) => p.id !== post.id);
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
svg {
  width: 100vw;
  height: 100vh;
}
.cont {
  display: flex;
  flex-direction: column;
}

/* button {
  position: absolute;
  top: 80px;
  left: 90px;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 130px;
  background-color: rgba(0, 136, 169, 0.8);
  color: white;
  border-radius: 54%;
  width: 250px;
  height: 250px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
    background: hsl(0, 90%, 46%);
    cursor: pointer;
    color: white;
    -webkit-transition: background-color 10ms linear;
    -ms-transition: background-color 10ms linear;
    transition: all 0.3s ease 0s;
  }
} */
.btn-close {
  top: 80px;
  left: 490px;
}
.app-btns {
  display: flex;
  justify-content: space-between;
}
</style>
