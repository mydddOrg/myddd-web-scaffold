import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { AuthService } from "../../src/modules/auth/AuthService";
import { EmployeeNet } from "../../src/modules/employee/EmployeeNet";


InstanceFactory.initIOC()

const authApplication:AuthService = InstanceFactory.getInstance(AuthService)
const employeeNet:EmployeeNet = InstanceFactory.getInstance(EmployeeNet)

var accessToken:String
beforeAll(async ()=>{
    accessToken = await authApplication.getAccessToken()
})

test('accessToken存在',()=>{
    expect(accessToken).not.toBeNull()
    expect(accessToken).toBeDefined()
})

test('查询内部联系人',async ()=>{
    const employees = await employeeNet.listEmployees(accessToken)
    expect(employees.length).toBeGreaterThanOrEqual(0)
})