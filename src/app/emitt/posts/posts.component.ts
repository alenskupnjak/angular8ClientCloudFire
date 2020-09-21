import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../post.model";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: "",
    body: "",
  };

  isEdit: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.isEdit = false;
    this.posts.forEach((element, index) => {
      if (post.id === element.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.currentPost = {
          id: 0,
          title: "",
          body: "",
        };
      }
    });
  }

  removePost(post: Post) {
    if (confirm(" Are you sure")) {
      this.postService.removePost(post.id).subscribe(() => {
        // brišem lokalno na ekranu
        this.posts.forEach((element, index) => {
          if (post.id === element.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}
