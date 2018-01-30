import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user.model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.loggedInUser;
    console.log(this.user)
    this.userService.userModified.subscribe((user:User)=>{
      this.user = user;
      console.log(user);
    });
  }

}
