import { EmployeeDTO } from "./domain/Employee";

export abstract class EmployeeNet {
    abstract listEmployees(accessToken:String):Promise<EmployeeDTO[]>
}