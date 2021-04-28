import { Page } from 'components/http/Page';
import { InstanceFactory } from 'components/ioc/InstanceFactory';
import { LoginNet } from './LoginNet';

export interface LoginDTO {

    id:number;

    username:string;

    displayName?:string;

    password:string;

    newPassword?:string;

    disabled:boolean;

    superUser:boolean;

}

export class Login implements LoginDTO{

    id:number;

    username:string;

    displayName?:string;

    password:string;

    newPassword?:string;

    disabled:boolean;

    superUser:boolean;

    public constructor(login?:LoginDTO){
        if(login){
            this.id = login.id;
            this.username = login.username;
            this.displayName = login.displayName;
            this.password = login.password;
            this.newPassword = login.newPassword;
            this.disabled = login.disabled;
            this.superUser = login.superUser;
        }
    }

    private static loginNet:LoginNet;

    private static getLoginNet():LoginNet{
        if(!Login.loginNet){
            Login.loginNet = InstanceFactory.getInstance(LoginNet);
        }
        return Login.loginNet;
    }

    public static listLoginUsers(page?:number,search?:string):Promise<Page<LoginDTO>>{
        return Login.getLoginNet().listLoginUsers(page,search);
    }

    public createLoginUser():Promise<boolean>{
        return Login.getLoginNet().createLoginUser(this);
    }

    public updateBaseInfo():Promise<boolean>{
        return Login.getLoginNet().updateLoginUser(this);
    }

    public static deleteLoginUser(username:string):Promise<boolean>{
        return Login.getLoginNet().deleteLoginUser(username);
    }

    public static requestForLogin(username: string, password: string): Promise<string>{
        return Login.getLoginNet().login(username, password);
    }

    public static enableUser(username:string):Promise<boolean>{
        return Login.getLoginNet().enableUser(username);
    }

    public static disableUser(username:string):Promise<boolean>{
        return Login.getLoginNet().disableUser(username);
    }

    public updatePassword(newPassword:string):Promise<boolean>{
        this.newPassword = newPassword;
        return Login.getLoginNet().updatePassword(this);
    }

}