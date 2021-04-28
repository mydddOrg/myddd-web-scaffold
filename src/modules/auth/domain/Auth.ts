import { InstanceFactory } from "components/ioc/InstanceFactory"
import { AuthNet } from "../AuthNet"

export class Auth {

    accessToken?:String

    accessExpiredIn?:number = 0

    constructor(accessToken?:String,accessExpiredIn?:number){
        this.accessToken = accessToken
        this.accessExpiredIn = accessExpiredIn
    }

    public isAccessTokenValid():boolean{
        return this.accessToken && new Date().getTime() < this.accessExpiredIn
    }

    private static authNet:AuthNet
    
    private static getAuthNet():AuthNet {
        if(!Auth.authNet){
            Auth.authNet = InstanceFactory.getInstance(AuthNet)
        }
        return Auth.authNet
    }

    public static requestAuth():Promise<Auth>{
        return Auth.getAuthNet().requestToken()
    }

}