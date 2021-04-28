import { LoginDTO } from './../domain/Login';
import { Page } from 'components/http/Page';

export abstract class LoginApplication {

    abstract requestForLogin(username:string,password:string):Promise<string>;

    abstract listLoginUsers(page?:number,search?:string):Promise<Page<LoginDTO>>;

    abstract createLoginUser(loginUser:LoginDTO):Promise<boolean>;

    abstract updateLoginUser(loginUser:LoginDTO):Promise<boolean>;

    abstract deleteLoginUser(username:string):Promise<boolean>;

    abstract enableUser(username:string):Promise<boolean>;
    
    abstract disableUser(username:string):Promise<boolean>;

    abstract udpatePassword(login:LoginDTO,newPassword:string):Promise<boolean>;

}