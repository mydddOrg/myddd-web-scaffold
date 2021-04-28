import Config from "components/Config";
import { IRequest } from "components/http/IRequest";
import { InstanceFactory } from "components/ioc/InstanceFactory";
import { AuthNet } from "../AuthNet";
import { Auth } from "../domain/Auth";

export class AuthNetImpl extends AuthNet {

    private request: IRequest = InstanceFactory.getInstance(IRequest)

    async requestToken(): Promise<Auth> {
        const clientId = Config.getInstance().data.clientId
        const clientSecret = Config.getInstance().data.clientSecret
        const url = Config.getInstance().data.api + "/api/token"

        const params = {
            clientId: clientId,
            clientSecret: clientSecret,
            domainId: "WeiXinApp",
            orgCode: Config.getInstance().data.orgCode
        }
        const response = await this.request.requestForPost(url,params)
        if(response.resultSuccess()){
            return new Auth(response.data?.accessToken, response.data?.accessExpiredIn)
        }
        return null
    }
    
}