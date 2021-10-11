import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";
import { Comment } from "../../models/Comment";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[]

  constructor(private commentsService : CommentsService, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => value)
    this.commentsService.getCommentsFromUrl().subscribe(value =>
      this.comments = value)
  }


  ngOnInit(): void {
  }

}
