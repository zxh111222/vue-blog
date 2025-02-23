<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import type { FormItemProps, FormProps } from 'element-plus'


const loading = ref(true)

const labelPosition = ref<FormProps['labelPosition']>('right')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>

<template>

  <div>
    <h1>我的简历</h1>
  </div>

  <div class="upload">
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      v-loading="loading"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </div>


  <div class="file-form">
    <el-form
      :label-position="labelPosition"
      label-width="auto"
      :model="formLabelAlign"
      style="max-width: 600px"
    >
      <el-form-item label="文件名" :label-position="itemLabelPosition">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="文件描述" :label-position="itemLabelPosition">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="文件标签" :label-position="itemLabelPosition">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
      <el-button type="primary" class="btn">提交</el-button>
    </el-form>
  </div>

</template>

<style scoped>
.upload {
  margin: 0 auto;
  max-width: 720px;
}

.file-form {
  margin: 0 auto;
  max-width: 640px;
}

.btn {
  width: 100%;
}

</style>
