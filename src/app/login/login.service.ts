import { EventEmitter } from "@angular/core";
import { User } from "../user/user.model";

export class LoginService{
    loginEvent:EventEmitter<User> = new EventEmitter<User>();

    login(user:User){
        this.loginEvent.emit(user);
    }
}