import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { Employee } from "../../src/modules/employee/domain/Employee";


beforeAll(async ()=>{
    InstanceFactory.initIOC()
})


test('获取所有雇员',async () => {
    const employees = await Employee.listEmployees()
    expect(employees.length).toBeGreaterThan(0)
})