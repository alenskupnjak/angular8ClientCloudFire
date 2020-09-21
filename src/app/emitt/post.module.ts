import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { PostFormComponent } from "./post-form/post-form.component";
import { PostsComponent } from "./posts/posts.component";

@NgModule({
  declarations: [PostFormComponent, PostsComponent],
  imports: [
    CommonModule, // zbog ngIF, ngFor..... mora biti
    FormsModule, // Template driven forme [(ngModel)]
    RouterModule, // za routing
  ],
})
export class PostModule {}
