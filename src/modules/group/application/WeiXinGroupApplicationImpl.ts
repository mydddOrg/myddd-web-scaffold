import { WeiXinGroup, WeiXinGroupDTO } from "../domain/WeiXinGroup";
import { WeiXinGroupApplication } from "../WeiXinGroupApplication";


export class WeiXinGroupApplicationImpl extends WeiXinGroupApplication {

    async createGroup(name:String,userIds:any):Promise<WeiXinGroupDTO>{
        return WeiXinGroup.createGroup(name,userIds)
    }

    async sendTextMessage(groupId:String,text:String):Promise<boolean>{
        return WeiXinGroup.sendMessage(groupId,text)
    }

    async listGroups():Promise<WeiXinGroupDTO[]>{
        return WeiXinGroup.listGroups()
    }

}