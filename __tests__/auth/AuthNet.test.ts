import { IRequest } from "../../src/components/http/IRequest";
import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { AuthNet } from "../../src/modules/auth/AuthNet";

InstanceFactory.initIOC()

const authNet:AuthNet = InstanceFactory.getInstance(AuthNet)

test('测试InstanceFactry初始化是否成功', () => {
    const request = InstanceFactory.getInstance(IRequest)
    expect(request).toBeDefined()
})

test('获取AuthNet对象',()=>{
    expect(authNet).toBeDefined()
})

test('auth net requestToken',async ()=>{
    const auth = await authNet.requestToken()
    expect(auth).not.toBeNull()
    expect(auth).toBeDefined()
})


