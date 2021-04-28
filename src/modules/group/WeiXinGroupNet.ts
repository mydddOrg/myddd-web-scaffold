import { WeiXinGroupDTO } from "./domain/WeiXinGroup";

export abstract class WeiXinGroupNet {

    abstract createGroup(name:String,userIds:any,accessToken:String):Promise<WeiXinGroupDTO>

    abstract sendTextMessage(groupId:String,text:String,accessToken:String):Promise<boolean>

    abstract listGroups(accessToken:String):Promise<WeiXinGroupDTO[]>
}