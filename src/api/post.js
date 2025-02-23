// import http from "./http.js";
// import http from "@/api/http.js";
import http from "@/api/http";


export function getPosts(){
  return http.get('/blog/list')
}

export function addPost(data){
  return http.post('/blog/add', data)
}

export function deletePost(id){
  return http.delete('/blog/delete/' + id)
}
