import Config from "components/Config";
import { IRequest } from "components/http/IRequest";
import { InstanceFactory } from "components/ioc/InstanceFactory";
import { WeiXinGroupDTO } from "../domain/WeiXinGroup";
import { WeiXinGroupNet } from "../WeiXinGroupNet";


export class WeiXinGroupNetImpl extends WeiXinGroupNet {

    private request:IRequest = InstanceFactory.getInstance(IRequest)

    async createGroup(name: String, userIds: String[],accessToken:String): Promise<WeiXinGroupDTO> {
        const url = Config.getInstance().data.api + "/weiXinApp/groups?accessToken=" + accessToken

        const requestBody = {
            name: name,
            userIds: userIds
        }

        const response = await this.request.requestForPost<WeiXinGroupDTO>(url,requestBody)
        if(response.resultSuccess()){
            return response.data
        }
        else{
            console.error(response.error)
            throw new Error(response.error)
        }
    }

    async sendTextMessage(groupId: String, text: String,accessToken:String): Promise<boolean> {
        const url = Config.getInstance().data.api + "/weiXinApp/messages?accessToken=" + accessToken  

        const requestBody = {
            toUserList: [groupId],
            body: {
                content: text,
                msgType: 'TEXT'
            }
        }
        const response = await this.request.requestForPost(url,requestBody)
        if(response.resultSuccess()){
            return true
        }
        else{
            console.error(response.error)
            throw new Error(response.error)
        }
    }
    
    async listGroups(accessToken:String): Promise<WeiXinGroupDTO[]> {
        const url = Config.getInstance().data.api + "/weiXinApp/groups?accessToken=" + accessToken
        const response = await this.request.requestForGet<WeiXinGroupDTO[]>(url)

        if(response.resultSuccess()){
            return response.data
        }
        else{
            console.error(response.error)
            throw new Error(response.error)
        }
    }

}