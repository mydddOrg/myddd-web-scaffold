import { Page } from 'components/http/Page';
import { LoginDTO } from "./Login";


export abstract class LoginNet{

    abstract login(username: string, password: string): Promise<string>;

    abstract listLoginUsers(page?:number,search?:string):Promise<Page<LoginDTO>>;

    abstract createLoginUser(loginUser:LoginDTO):Promise<boolean>;

    abstract updateLoginUser(loginUser:LoginDTO):Promise<boolean>;

    abstract deleteLoginUser(username:string):Promise<boolean>;

    abstract enableUser(username:string):Promise<boolean>;

    abstract disableUser(username:string):Promise<boolean>;

    abstract updatePassword(loginUser:LoginDTO):Promise<boolean>;

}