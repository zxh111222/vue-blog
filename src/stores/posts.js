import { defineStore } from 'pinia'


export const usePostStore = defineStore('posts-store',{
  /* Data 准备数据 */
  state(){
    return {
      posts: []
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
      this.posts = this.posts.filter(p => p.id !== id)
    },
    getPosts(){
      fetch('http://localhost:8080/db.json')
        .then(res => res.json())
        .then((data) => {this.posts = data.posts})
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
