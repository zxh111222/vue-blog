<script setup>
import {usePostStore} from "@/stores/posts.js";
import {ref} from "vue";

let postsStore = usePostStore();

const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
});

const isEditing = ref(false)

const editedPost = ref(null)

function startEdit() {
  isEditing.value = true;
  editedPost.value = {...props.blog}
}

function cancelEdit() {
  isEditing.value = false;
  editedPost.value = null;
}

function handleEdit() {
  if (editedPost.value) {
    // 调方法
    postsStore.editPost(editedPost.value);

    isEditing.value = false;
    editedPost.value = null;
  }
}

const confirmDelete = () => {
  if (window.confirm("确定删除吗？")) {
    postsStore.deletePost(props.blog.id)

  }
}

</script>

<template>
  <div>
    <div class="edit-form" v-if="isEditing">
      <h3>编辑表单</h3>
      <form @submit.prevent="handleEdit">
        <div class="form-group">
          <label>标题:</label>
          <input type="text" required v-model="editedPost.title">
        </div>

        <div class="form-group">
          <label>内容:</label>
          <textarea required v-model="editedPost.content"></textarea>
        </div>

        <div class="buttons">
          <button type="button" @click="cancelEdit" class="cancel">取消</button>
          <button type="submit" class="edit">修改</button>
        </div>
      </form>
    </div>
    <div class="post">
      <div class="header">
        <span>作者：{{ blog.author }} 发布于：{{ blog.created_at }}</span>
        <div>
          <button @click="confirmDelete" class="btn-del">删除</button>
          <button @click="startEdit" class="btn-edit">编辑</button>
        </div>
      </div>
      <h1>{{ blog.title }}</h1>
      <div class="content">{{ blog.content }}</div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.header {
  font-size: 12px;
  background: #0284c7;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 300;

  button {
    border-radius: 30px;
  }

  div .btn-del {
    font-size: 12px;
    padding: 6px 12px;
    background: #fff;
    color: #ef4444;
  }

  div .btn-edit {
    font-size: 12px;
    padding: 6px 12px;
    background: #fff;
    color: #22c55e;
    margin-left: 10px;
  }
}

h1 {
  padding: 1rem;
}

p {
  padding: 0 1rem 1rem;
  font-weight: 300;
}

.content {
  padding: 1rem;
}

.edit-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  z-index: 1000;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  height: 150px;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

.buttons button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &.edit {
    background: #0ea5e9;
    color: white;
  }

  &.cancel {
    background: #ef4444;
    color: white;
  }
}
</style>
