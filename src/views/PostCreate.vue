<script setup>

import MyWrapper from "@/components/MyWrapper.vue";
import {reactive} from "vue";

const post = reactive(
  {
    title: '',
    content: '',
  }
)
</script>

<template>
  <MyWrapper>
    <form>
      DEBUG: {{ post.title }}
      DEBUG: {{ post.content }}
      <h3>创建博客</h3>
      <div>
        <label for="title">标题</label>
        <input type="text" name="title" id="title" v-model="post.title"/>
      </div>
      <div>
        <label for="content">内容</label>
        <textarea name="content" id="content" rows="7" v-model="post.content"></textarea>
      </div>
      <div>
        <button>创建</button>
      </div>
    </form>
  </MyWrapper>
</template>

<style lang="scss" scoped>
.wrapper {
  h3 {
    margin-bottom: 1rem;
  }

  div {
    margin-bottom: 1rem;

    label {
      font-weight: 300;
    }

    input,
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      border: 1px solid #333;
      padding: 5px;
      border-radius: 5px;

      &:focus {
        outline: 2px solid #3b82f6;
        border: none;
      }
    }

    button {
      background: #3b82f6;
      color: #fff;
      width: 100%;
      padding: 5px;
      border-radius: 5px;

      &:hover {
        background: #2563eb;
      }

      &:disabled {
        background: #eee;
        cursor: not-allowed
      }
    }
  }
}
</style>
