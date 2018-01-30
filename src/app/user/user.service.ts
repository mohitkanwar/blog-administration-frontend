import { User } from "./user.model";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Injectable,EventEmitter } from "@angular/core";
import { LoginService } from "../login/login.service";

@Injectable()
export class UserService {
    
    loggedInUser : User;
    userModified : EventEmitter<User> = new EventEmitter<User>();
    constructor(private loginservice:LoginService){
        this.loggedInUser = new User();
        this.loggedInUser.userName = 'Guest';
        this.loginservice.loginEvent.subscribe((user:User)=>{
            this.loggedInUser = user;
            console.log("in User service")
            this.userModified.emit(user);
        });
    }
    
}