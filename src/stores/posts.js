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
      const newPost = {
        // id: this.posts.length+1,
        title: post.title,
        content: post.content,
        // author: '大明',
        // created_at: new Date().toLocaleDateString()
      };
      // this.posts.push(newPost)
      fetch('http://localhost:8080/blog/add', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newPost)
      })
        .then(() => this.getPosts())
        .catch(e => console.log(e))
    },
    deletePost(id){
      // this.posts = this.posts.filter(p => p.id !== id)
      fetch('http://localhost:8080/blog/delete/' + id, {
        method: 'DELETE',
      }).then(res => this.getPosts())
        .catch(e => console.log(e))
    },
    getPosts(){
      fetch('http://localhost:8080/blog/list')
        .then(res => res.json())
        .then((data) => {this.posts = data.posts})
    },
    editPost(post){
      fetch('http://localhost:8080/blog/add', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(post)
      }).then(res => this.getPosts())
        .catch(e => console.log(e))
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
