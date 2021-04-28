import { Employee, EmployeeDTO } from "../domain/Employee";
import { EmployeeApplication } from "../EmployeeApplication";

export class EmployeeApplicationImpl extends EmployeeApplication {
    listEmployees(): Promise<EmployeeDTO[]> {
        return Employee.listEmployees()
    }

}