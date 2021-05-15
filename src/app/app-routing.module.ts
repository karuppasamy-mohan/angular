import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostListComponent } from './components/post-list/post-list.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'addpost', component: AddPostComponent },
  { path: 'editpost', component: EditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
