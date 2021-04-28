import { InstanceFactory } from "components/ioc/InstanceFactory"
import { AuthService } from "modules/auth/AuthService"
import { EmployeeNet } from "../EmployeeNet"


export interface EmployeeDTO{
    userId:string
    name:string
    avatar?:string
}

export class Employee implements EmployeeDTO{
    userId:string
    name:string
    avatar?:string

    constructor(employee?:EmployeeDTO){
        if(employee){
            this.userId = employee.userId
            this.name = employee.name
            this.avatar = employee.avatar
        }
    }

    private static employeeNet:EmployeeNet

    private static getEmployeeNet(){
        if(!Employee.employeeNet){
            Employee.employeeNet = InstanceFactory.getInstance(EmployeeNet)
        }
        return Employee.employeeNet
    }

    private static authService:AuthService

    private static getAuthService(){
        if(!Employee.authService){
            Employee.authService = InstanceFactory.getInstance(AuthService)
        }
        return Employee.authService
    }

    public static async listEmployees():Promise<EmployeeDTO[]>{
        const accessToken = await this.getAuthService().getAccessToken()
        const employees = await this.getEmployeeNet().listEmployees(accessToken)
        return employees
    }
}