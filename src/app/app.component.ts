import { Component } from '@angular/core';
import { User } from './user/user.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user:User;

  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
   this.loginService.loginEvent.subscribe((user:User)=>{
     this.user=user;
     console.log(user.userName +" Has just logged in");
   })
  }
  
}
