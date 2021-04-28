import { EmployeeDTO } from "./domain/Employee";

export abstract class EmployeeApplication {
    abstract listEmployees():Promise<EmployeeDTO[]>
}