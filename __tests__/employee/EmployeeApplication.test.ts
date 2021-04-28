import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { EmployeeApplication } from "../../src/modules/employee/EmployeeApplication";


InstanceFactory.initIOC()

const employeeApplication:EmployeeApplication = InstanceFactory.getInstance(EmployeeApplication)

test("获取所有雇员",async ()=>{
    const employees = await employeeApplication.listEmployees()
    expect(employees.length).toBeGreaterThanOrEqual(0)
})

