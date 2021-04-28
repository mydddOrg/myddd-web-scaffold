import { WeiXinGroupDTO } from "./domain/WeiXinGroup";

export abstract class WeiXinGroupApplication{

    abstract createGroup(name:String,userIds:any):Promise<WeiXinGroupDTO>

    abstract sendTextMessage(groupId:String,text:String):Promise<boolean>

    abstract listGroups():Promise<WeiXinGroupDTO[]>

}