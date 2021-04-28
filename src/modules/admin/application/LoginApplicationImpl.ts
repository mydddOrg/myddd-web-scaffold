import { Page } from 'components/http/Page';
import { LoginDTO, Login } from './../domain/Login';
import { LoginApplication } from '../view/LoginApplication';

export class LoginApplicationImpl extends LoginApplication {

    public async requestForLogin(username: string, password: string): Promise<string> {
        let md5Password:string = require('md5')(password);
        return Login.requestForLogin(username,md5Password.toUpperCase());
    }

    public async listLoginUsers(page?:number,search?:string):Promise<Page<LoginDTO>>{
        return Login.listLoginUsers(page,search);
    }

    public async createLoginUser(loginUser:LoginDTO):Promise<boolean>{
        const willCreated = new Login(loginUser);
        return willCreated.createLoginUser();
    }

    public async updateLoginUser(loginUser:LoginDTO):Promise<boolean>{
        const willUpdate = new Login(loginUser);
        return willUpdate.updateBaseInfo();
    }

    public async deleteLoginUser(username:string):Promise<boolean>{
        return Login.deleteLoginUser(username);
    }

    public async enableUser(username:string):Promise<boolean>{
        return Login.enableUser(username);
    }

    public async disableUser(username:string):Promise<boolean>{
        return Login.disableUser(username);
    }

    public async udpatePassword(login:LoginDTO,newPassword:string):Promise<boolean>{
        const updatePasswordLogin = new Login(login);
        return updatePasswordLogin.updatePassword(newPassword);
    }
}