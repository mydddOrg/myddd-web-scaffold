import { InstanceFactory } from "components/ioc/InstanceFactory";
import { AuthService } from "modules/auth/AuthService";
import { MessageNet } from "../MessageNet";


export class MessageService {

    private static messageNet:MessageNet

    private static getMessageNet():MessageNet {
        if(!MessageService.messageNet){
            MessageService.messageNet = InstanceFactory.getInstance(MessageNet)
        }
        return MessageService.messageNet
    }

    private static authService:AuthService

    private static getAuthService():AuthService {
        if(!MessageService.authService){
            MessageService.authService = InstanceFactory.getInstance(AuthService)
        }
        return MessageService.authService
    }

    public async sendMesasge(text:String,userId:String):Promise<boolean> {
        const accessToken = await MessageService.getAuthService().getAccessToken()
        return MessageService.getMessageNet().sendTextMessage(text,userId,accessToken)
    }

}