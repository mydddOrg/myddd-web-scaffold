import Config from "components/Config";
import { IRequest } from "components/http/IRequest";
import { InstanceFactory } from "components/ioc/InstanceFactory";
import { EmployeeDTO } from "../domain/Employee";
import { EmployeeNet } from "../EmployeeNet";

export class EmployeeNetImpl extends EmployeeNet {

    private request: IRequest = InstanceFactory.getInstance(IRequest)

    async listEmployees(accessToken:String): Promise<EmployeeDTO[]> {
        const orgCode = Config.getInstance().data.orgCode
        const url = Config.getInstance().data.api + "/organizations/"+orgCode+"/employees?accessToken="+accessToken+"&limit=100"
        const response = await this.request.requestForGet<EmployeeDTO[]>(url)
        if(response.status == 200){
            return response.data
        }
        return null
    }

}