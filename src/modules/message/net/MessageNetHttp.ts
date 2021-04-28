import Config from "components/Config";
import { IRequest } from "components/http/IRequest";
import { InstanceFactory } from "components/ioc/InstanceFactory";
import { MessageNet } from "../MessageNet";

export class MessageNetHttp extends MessageNet {

    private request: IRequest = InstanceFactory.getInstance(IRequest)

    async sendTextMessage(text: String, userId: String,accessToken:String): Promise<boolean> {
        const url = Config.getInstance().data.api + "/messages?accessToken=" + accessToken
        const params = {
            forAll: false,
            toUserList: [userId],
            body: {
                msgType: "TEXT",
                content: text
            }
        }
        const response = await this.request.requestForPost(url,params)
        if(response.resultSuccess()){
            return true
        }
        return false
    }

}