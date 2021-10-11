import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {UsersComponent} from "../components/users/users.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {PostsComponent} from "../components/posts/posts.component";
import { PostDetailsComponent } from "../components/post-details/post-details.component";
import {DeaktivatorService} from "../services/deaktivator.service";
import {CommentsComponent} from "../components/comments/comments.component";
import {ResolveService} from "../services/resolve.service";

export let routes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, canDeactivate: [DeaktivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'comments', component: CommentsComponent, resolve: {data: ResolveService}}
]
