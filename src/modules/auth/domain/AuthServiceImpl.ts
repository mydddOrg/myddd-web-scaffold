import { AuthService } from "../AuthService";
import { Auth } from "./Auth";


export class AuthServieImpl extends AuthService {


    private auth:Auth

    async getAccessToken(): Promise<String> {
        if(!this.auth || !this.auth.isAccessTokenValid()){
            this.auth = await Auth.requestAuth()
        }
        return this.auth.accessToken
    }
}