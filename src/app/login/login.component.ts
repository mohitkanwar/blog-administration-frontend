import { Component, OnInit ,EventEmitter} from '@angular/core';
import { User } from '../user/user.model';
import { LoginService } from './login.service';
import { Blog } from '../blog/blog.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  onLoginClick(){
    let user:User = new User();
    user.userName = "Mohit";
    let blogs:Blog[]=new Array();
    blogs.push(new Blog(1,"Default","My Default Blog"));
    user.blogs=blogs;
    this.loginService.login(user);
  }
}
