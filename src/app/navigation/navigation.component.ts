import { Component, OnInit } from '@angular/core';
import {adminEnabled} from '../properties/environment.properties'
import { User } from '../user/user.model';
import { LoginService } from '../login/login.service';
import { UserService } from '../user/user.service';
import { Blog } from '../blog/blog.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user:User;
  selectedBlog:Blog
  constructor(private userservice:UserService) { console.log("Navigation Component Constructed")}
  ngOnInit() {
    this.user = this.userservice.loggedInUser;
    console.log(this.user)
    this.userservice.userModified.subscribe((loggedInUser:User)=>{
      console.log("in navigation")
      this.user = loggedInUser;
    });
  }

}
