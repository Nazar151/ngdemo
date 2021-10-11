import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Navigation, Router} from "@angular/router";
import {relative} from "@angular/compiler-cli/src/ngtsc/file_system";
import {relativeToRootDirs} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User

  constructor(private router : Router, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToDetails(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }

}
