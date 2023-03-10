import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getusersUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id';
  updateusersUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id';
  deleteusersUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id';
  followusersUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id/unfollow';
  unfollowusersUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id/follow';

  postsUrl = 'https://social-media-app-sdmc.onrender.com/api/posts/';
  updatepostsUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id';
  deletepostsUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id';
  likepostsUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id/like';
  getpostsUrl = 'https://social-media-app-sdmc.onrender.com/api/users/:id';
  timelineallpostsUrl = 'https://social-media-app-sdmc.onrender.com/api/posts/timeline/all';

  constructor(private http: HttpClient) { }

  followUser(data: any){
    return this.http.put(this.followusersUrl,data)
  }
  unfollowUser(data: any){
    return this.http.put(this.unfollowusersUrl,data)
  }

  updateUser(data: any){
    return this.http.put(this.updateusersUrl, data)
  }
  deleteUser(data: any){
    return this.http.delete(this.deleteusersUrl,data)
  }
  getUser(){
    return this.http.get(this.getusersUrl)
  }

  getPosts(){
    return this.http.get(this.getpostsUrl)
  }
  updatePosts(data: any){
    return this.http.put(this.updatepostsUrl, data)
  }
  deletePosts(data: any){
    return this.http.delete(this.deletepostsUrl,data)
  }

  likePosts(data: any){
   return this.http.get(this.likepostsUrl, data) 
  }

}
