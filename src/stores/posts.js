import { defineStore } from 'pinia'


export const usePostStore = defineStore('posts-store',{
  /* Data 准备数据 */
  state(){
    return {
      posts: [
        {
          id: 1,
          title: 'vue 入门',
          content: '这里讲解了关于 vue 的入门',
          author: '小明',
          created_at: '2025-02-13',
        },
        {
          id: 2,
          title: 'vue 进阶',
          content: '这里讲解了关于 vue 的进阶',
          author: '中明',
          created_at: '2025-02-15',
        },
        {
          id: 3,
          title: 'vue 高级',
          content: '这里讲解了关于 vue 的高级',
          author: '大明',
          created_at: '2025-02-16',
        }
      ]
    }
  },
  /* 方法 */
  actions: {
    addPost(post){
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        content: post.content,
        author: "小红",
        created_at: new Date().toLocaleDateString(),
      })
    },
    deletePost(id){
      this.posts = this.posts.filter((p) => p.id !== id)
    }
  },
  getters: {
    // sortedPosts(){
    //   return this.posts.sort((a, b) => {
    //     return b.id - a.id
    //   })
    // }
    sortedPosts: (state) => state.posts.sort((a, b) => {return b.id - a.id})
  }
})
