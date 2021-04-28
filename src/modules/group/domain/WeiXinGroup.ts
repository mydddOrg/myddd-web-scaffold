import { InstanceFactory } from "components/ioc/InstanceFactory"
import { AuthService } from "modules/auth/AuthService"
import { WeiXinGroupNet } from "../WeiXinGroupNet"


export interface WeiXinGroupDTO{
    groupId?:string
    name:string
    userIds:string[]
}

export class WeiXinGroup implements WeiXinGroupDTO{

    constructor(weiXinGroup?:WeiXinGroup){
        if(weiXinGroup){
            this.groupId = weiXinGroup.groupId
            this.name = weiXinGroup.name
            this.userIds = weiXinGroup.userIds
        }
    }
    
    groupId?:string
    name:string
    userIds:string[]

    private static authService:AuthService

    private static getAuthService():AuthService {
        if(!WeiXinGroup.authService){
            WeiXinGroup.authService = InstanceFactory.getInstance(AuthService)
        }
        return WeiXinGroup.authService
    }


    private static weiXinGroupNet:WeiXinGroupNet

    private static getGroupNet():WeiXinGroupNet{
        if(!WeiXinGroup.weiXinGroupNet){
            WeiXinGroup.weiXinGroupNet = InstanceFactory.getInstance(WeiXinGroupNet)
        }
        return WeiXinGroup.weiXinGroupNet
    }

    public static async createGroup(name:String,userIds:String[]):Promise<WeiXinGroupDTO>{
        const accessToken = await WeiXinGroup.getAuthService().getAccessToken()
        return WeiXinGroup.getGroupNet().createGroup(name,userIds,accessToken)
    }

    public static async sendMessage(groupId:String,text:String):Promise<boolean>{
        const accessToken = await WeiXinGroup.getAuthService().getAccessToken()
        return WeiXinGroup.getGroupNet().sendTextMessage(groupId,text,accessToken)
    }

    public static async listGroups():Promise<WeiXinGroupDTO[]>{
        const accessToken = await WeiXinGroup.getAuthService().getAccessToken()
        return WeiXinGroup.getGroupNet().listGroups(accessToken)
    }
}